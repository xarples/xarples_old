# Migration `20190823205745-add-user-model`

This migration has been generated by Guillermo Lopez at 8/23/2019, 8:57:45 PM.
You can check out the [state of the datamodel](./datamodel.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User"("id" text NOT NULL  ,"email" text NOT NULL DEFAULT '' ,"name" text   ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,PRIMARY KEY ("id"));

CREATE UNIQUE INDEX "User.id._UNIQUE" ON "public"."User"("id")

CREATE UNIQUE INDEX "User.email._UNIQUE" ON "public"."User"("email")
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration ..20190823205745-add-user-model
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,17 @@
+datasource pg {
+  provider = "postgresql"
+  url      = env("POSTGRES_URL")
+
+}
+
+generator photon {
+  provider = "photonjs"
+}
+
+model User {
+  id    String  @default(cuid()) @id @unique
+  email String  @unique
+  name  String?
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+}
```

## Photon Usage

You can use a specific Photon built for this migration (20190823205745-add-user-model)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/20190823205745-add-user-model'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
