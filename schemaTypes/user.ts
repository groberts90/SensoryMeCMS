// sanity/schemas/user.ts
import { defineField, defineType } from "sanity";

export const userSchema = defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "userName",
      type: "string",
      title: "Username",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (R) => R.required().email(),
    }),
    defineField({
      name: "password",
      type: "string",
      title: "Password Hash",
      hidden: true,
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Role",
      options: {
        list: ["admin", "paidUser", "freeUser"],
      },
      initialValue: "freeUser",
    }),
    defineField({
      name: "active",
      type: "boolean",
      title: "Active",
      initialValue: true,
    }),
    defineField({
      name: "strategies",
      title: "Chosen Strategies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "strategy" }],
        },
      ],
      description: "The strategies chosen by this user.",
    }),
  ],
});