import { User } from "../models/user"
import { Event } from "../models/event"
import { Member } from "../models/member"
import { Participation } from "../models/participation"

export default {
  "users/darwin": <User>{
    "UID": "darwin",
    "Membership ID": "darwinMembership",
    "Roles": {
      Administrator: true,
      Editor: true,
      Alumni: true,
    },
  },
  "users/linux": <User>{
    "UID": "linux",
    "Membership ID": "linuxMembership",
    "Roles": {
      Administrator: false,
      Editor: true,
      Alumni: true,
    },
  },
  "users/windows": <User>{
    "UID": "windows",
    "Membership ID": "windowsMembership",
    "Roles": {
      Administrator: false,
      Editor: false,
      Alumni: true,
    },
  },
  "users/dos": <User>{
    "UID": "dos",
    "Membership ID": null,
    "Roles": {
      Administrator: false,
      Editor: false,
      Alumni: false,
    },
  },

  "members/darwinMembership": <Member>{
    "Membership ID": "darwinMembership",
  },
  "members/linuxMembership": <Member>{
    "Membership ID": "linuxMembership",
  },
  "members/windowsMembership": <Member>{
    "Membership ID": "windowsMembership",
  },

  "events/20191211": <Event>{
    "Event Code": 20191211,
  },

  "participations/darwinParticipation": <Participation>{
    "Membership ID": "darwinMembership",
  },
  "participations/linuxParticipation": <Participation>{
    "Membership ID": "linuxMembership",
  },
  "participations/windowsParticipation": <Participation>{
    "Membership ID": "windowsMembership",
  },
}
