import SignupForm from "./SignupForm";

type SignupPageProps = {
  searchParams?: Promise<{
    next?: string;
  }>;
};

export default async function SignupPage({ searchParams }: SignupPageProps) {
  const params = await searchParams;

  return <SignupForm nextPath={params?.next} />;
}
