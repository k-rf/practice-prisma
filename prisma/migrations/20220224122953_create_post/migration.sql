-- CreateTable
CREATE TABLE "Post" (
    "id" UUID NOT NULL,
    "userUser_id" UUID NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userUser_id_fkey" FOREIGN KEY ("userUser_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
