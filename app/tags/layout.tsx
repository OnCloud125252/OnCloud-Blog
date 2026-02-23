import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tags",
  description: "Topic I've written about",
};

export default function TagsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
