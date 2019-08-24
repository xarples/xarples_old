import Photon from '@generated/photon'

type IPhoton = Photon

let photon: IPhoton

export function setupDatabase () {
  if (!photon) {
    photon = new Photon()
  }

  return photon
}