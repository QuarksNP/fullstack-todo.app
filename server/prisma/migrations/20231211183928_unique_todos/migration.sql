/*
  Warnings:

  - A unique constraint covering the columns `[id,user_id]` on the table `Todos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Todos_id_user_id_key" ON "Todos"("id", "user_id");
