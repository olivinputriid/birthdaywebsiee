CREATE TABLE "wishes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	"message" text NOT NULL,
	"photo_key" text,
	"favorite" integer DEFAULT 1 NOT NULL,
	"celebration" integer DEFAULT 0 NOT NULL,
	"smile" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
