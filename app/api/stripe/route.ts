import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

export async function POST() {
  try {
    const settingsUrl = absoluteUrl("/settings");

    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userSubscription = await prismadb.userSubscription.findUnique({
      where: { userId },
    });

    if (userSubscription?.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      });

      return NextResponse.json({ url: stripeSession.url });
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "Genius Pro",
              description: "Unlimited AI Generations",
            },
            unit_amount: 2000,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
      metadata: { userId },
    });

    return NextResponse.json({ url: stripeSession.url });
  } catch (error) {
    console.error("[STRIPE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
