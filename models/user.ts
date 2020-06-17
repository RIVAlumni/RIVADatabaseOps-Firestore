import { Roles } from "./roles"

export interface User {
  "UID": string
  "Membership ID": string | null
  "Roles": Roles
}
