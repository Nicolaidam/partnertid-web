import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-h3">
                Tak for din tilmelding!
              </CardTitle>
              <CardDescription>Tjek din e-mail for at godkende</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-small text-muted-foreground">
                Du er nu oprettet. Tjek din e-mail for at godkende din konto,
                inden du logger ind.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
