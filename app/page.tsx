import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>This is for authenticated users</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
