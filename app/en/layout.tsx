import SchemaOrg from '@/components/SchemaOrg';

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* Override the IT restaurant schema from root layout with EN version */}
      <SchemaOrg variant="restaurant" lang="en" />
    </>
  );
}
