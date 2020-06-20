import { random } from "faker"
import { setup, teardown } from ".."
import { firestore } from "@firebase/testing"

import data from "../utils/predefinedData"

describe("Administrator User", () => {
  let db: firestore.Firestore

  beforeEach(async () => (db = await setup({ uid: "darwin" }, data)))
  afterEach(async () => await teardown())

  it("should allow reading/writing/deleting own user document", async () => {
    const ref = db.doc("users/darwin")

    await expect(ref.get()).toAllow()
    await expect(ref.set(data["users/darwin"])).toAllow()
    await expect(ref.update(data["users/darwin"])).toAllow()
    await expect(ref.delete()).toAllow()
  })

  it("should allow reading/deleting and deny writing any user document", async () => {
    const ref = db.doc(`users/${random.uuid()}`)

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toAllow()
  })

  it("should allow reading/writing/deleting own member document", async () => {
    const ref = db.doc("members/darwinMembership")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toAllow()
  })

  it("should allow reading/writing/deleting any member document", async () => {
    const ref = db.doc(`members/${random.uuid()}`)

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toAllow()
  })

  it("should deny reading/writing/deleting any remarks document", async () => {
    const ref = db.doc(`members/${random.uuid()}/remarks/${random.uuid()}`)

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toAllow()
  })

  it("should deny reading/writing/deleting own remarks document", async () => {
    const ref = db.doc(`members/darwinMembership/remarks/${random.uuid()}`)

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toAllow()
  })

  it("should allow reading/writing/deleting any event document", async () => {
    const ref = db.doc(`events/${random.number(99999999)}`)

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toAllow()
  })

  it("should allow reading/writing/deleting own participation document", async () => {
    const ref = db.doc("participations/darwinParticipation")

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toAllow()
  })

  it("should allow reading/writing/deleting any participation document", async () => {
    const ref = db.doc(`participations/${random.uuid()}`)

    await expect(ref.get()).toAllow()
    await expect(ref.set({})).toAllow()
    await expect(ref.update({})).toAllow()
    await expect(ref.delete()).toAllow()
  })
})
