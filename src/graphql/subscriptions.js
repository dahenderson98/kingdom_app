/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMissionary = /* GraphQL */ `
  subscription OnCreateMissionary(
    $filter: ModelSubscriptionMissionaryFilterInput
  ) {
    onCreateMissionary(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateMissionary = /* GraphQL */ `
  subscription OnUpdateMissionary(
    $filter: ModelSubscriptionMissionaryFilterInput
  ) {
    onUpdateMissionary(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteMissionary = /* GraphQL */ `
  subscription OnDeleteMissionary(
    $filter: ModelSubscriptionMissionaryFilterInput
  ) {
    onDeleteMissionary(filter: $filter) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateArea = /* GraphQL */ `
  subscription OnCreateArea($filter: ModelSubscriptionAreaFilterInput) {
    onCreateArea(filter: $filter) {
      id
      name
      zone
      phone_number
      apt_address
      notes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateArea = /* GraphQL */ `
  subscription OnUpdateArea($filter: ModelSubscriptionAreaFilterInput) {
    onUpdateArea(filter: $filter) {
      id
      name
      zone
      phone_number
      apt_address
      notes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteArea = /* GraphQL */ `
  subscription OnDeleteArea($filter: ModelSubscriptionAreaFilterInput) {
    onDeleteArea(filter: $filter) {
      id
      name
      zone
      phone_number
      apt_address
      notes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateZone = /* GraphQL */ `
  subscription OnCreateZone($filter: ModelSubscriptionZoneFilterInput) {
    onCreateZone(filter: $filter) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      note
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      zoneZl_1Id
      zoneZl_2Id
      zoneStl_1Id
      zoneStl_2Id
    }
  }
`;
export const onUpdateZone = /* GraphQL */ `
  subscription OnUpdateZone($filter: ModelSubscriptionZoneFilterInput) {
    onUpdateZone(filter: $filter) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      note
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      zoneZl_1Id
      zoneZl_2Id
      zoneStl_1Id
      zoneStl_2Id
    }
  }
`;
export const onDeleteZone = /* GraphQL */ `
  subscription OnDeleteZone($filter: ModelSubscriptionZoneFilterInput) {
    onDeleteZone(filter: $filter) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      note
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      zoneZl_1Id
      zoneZl_2Id
      zoneStl_1Id
      zoneStl_2Id
    }
  }
`;
