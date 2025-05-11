import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import { routing } from "../features/localization/routing";
import { Locale } from "../features/localization/types";

import { NextIntlClientProvider } from "next-intl";

import "../globals.css";

export type LocalizedRootLayoutParams = Promise<{
  locale: string;
}>;

export type LocalizedRootLayoutProps = {
  params: LocalizedRootLayoutParams;
};

export default async function LocalizedRootLayout(
  props: PropsWithChildren<Readonly<LocalizedRootLayoutProps>>
) {
  const { locale } = await props.params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <main>{props.children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
