/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMissionary = /* GraphQL */ `
  query GetMissionary($id: ID!) {
    getMissionary(id: $id) {
      id
      first_name
      last_name
      sex
      can_drive
      is_senior_companion
      language
      joined_mission
      leaving_mission
      hometown
      notes
    }
  }
`;
export const listMissionaries = /* GraphQL */ `
  query ListMissionaries(
    $filter: ModelMissionaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMissionaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        sex
        can_drive
        is_senior_companion
        language
        joined_mission
        leaving_mission
        hometown
        notes
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMissionaries = /* GraphQL */ `
  query SyncMissionaries(
    $filter: ModelMissionaryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMissionaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        first_name
        last_name
        sex
        can_drive
        is_senior_companion
        language
        joined_mission
        leaving_mission
        hometown
        notes
      }
      nextToken
      startedAt
    }
  }
`;
export const getArea = /* GraphQL */ `
  query GetArea($id: ID!) {
    getArea(id: $id) {
      id
      name
      zone
      dl
      phone_number
      apt_address
      notes
    }
  }
`;
export const listAreas = /* GraphQL */ `
  query ListAreas(
    $filter: ModelAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        zone
        dl
        phone_number
        apt_address
        notes
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAreas = /* GraphQL */ `
  query SyncAreas(
    $filter: ModelAreaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAreas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        zone
        dl
        phone_number
        apt_address
        notes
      }
      nextToken
      startedAt
    }
  }
`;
export const areasByZone = /* GraphQL */ `
  query AreasByZone(
    $zone: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    areasByZone(
      zone: $zone
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        zone
        dl
        phone_number
        apt_address
        notes
      }
      nextToken
      startedAt
    }
  }
`;
export const getZone = /* GraphQL */ `
  query GetZone($id: ID!) {
    getZone(id: $id) {
      id
      name
      areas {
        nextToken
        startedAt
      }
      zl_1 {
        id
        first_name
        last_name
        sex
        can_drive
        is_senior_companion
        language
        joined_mission
        leaving_mission
        hometown
        notes
      }
      zl_2 {
        id
        first_name
        last_name
        sex
        can_drive
        is_senior_companion
        language
        joined_mission
        leaving_mission
        hometown
        notes
      }
      stl_1 {
        id
        first_name
        last_name
        sex
        can_drive
        is_senior_companion
        language
        joined_mission
        leaving_mission
        hometown
        notes
      }
      stl_2 {
        id
        first_name
        last_name
        sex
        can_drive
        is_senior_companion
        language
        joined_mission
        leaving_mission
        hometown
        notes
      }
      note
      zoneZl_1Id
      zoneZl_2Id
      zoneStl_1Id
      zoneStl_2Id
    }
  }
`;
export const listZones = /* GraphQL */ `
  query ListZones(
    $filter: ModelZoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        note
        zoneZl_1Id
        zoneZl_2Id
        zoneStl_1Id
        zoneStl_2Id
      }
      nextToken
      startedAt
    }
  }
`;
export const syncZones = /* GraphQL */ `
  query SyncZones(
    $filter: ModelZoneFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncZones(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        note
        zoneZl_1Id
        zoneZl_2Id
        zoneStl_1Id
        zoneStl_2Id
      }
      nextToken
      startedAt
    }
  }
`;
