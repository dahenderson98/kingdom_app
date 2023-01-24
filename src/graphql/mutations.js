/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMissionary = /* GraphQL */ `
  mutation CreateMissionary(
    $input: CreateMissionaryInput!
    $condition: ModelMissionaryConditionInput
  ) {
    createMissionary(input: $input, condition: $condition) {
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
export const updateMissionary = /* GraphQL */ `
  mutation UpdateMissionary(
    $input: UpdateMissionaryInput!
    $condition: ModelMissionaryConditionInput
  ) {
    updateMissionary(input: $input, condition: $condition) {
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
export const deleteMissionary = /* GraphQL */ `
  mutation DeleteMissionary(
    $input: DeleteMissionaryInput!
    $condition: ModelMissionaryConditionInput
  ) {
    deleteMissionary(input: $input, condition: $condition) {
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
export const createArea = /* GraphQL */ `
  mutation CreateArea(
    $input: CreateAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    createArea(input: $input, condition: $condition) {
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
export const updateArea = /* GraphQL */ `
  mutation UpdateArea(
    $input: UpdateAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    updateArea(input: $input, condition: $condition) {
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
export const deleteArea = /* GraphQL */ `
  mutation DeleteArea(
    $input: DeleteAreaInput!
    $condition: ModelAreaConditionInput
  ) {
    deleteArea(input: $input, condition: $condition) {
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
export const createZone = /* GraphQL */ `
  mutation CreateZone(
    $input: CreateZoneInput!
    $condition: ModelZoneConditionInput
  ) {
    createZone(input: $input, condition: $condition) {
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
export const updateZone = /* GraphQL */ `
  mutation UpdateZone(
    $input: UpdateZoneInput!
    $condition: ModelZoneConditionInput
  ) {
    updateZone(input: $input, condition: $condition) {
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
export const deleteZone = /* GraphQL */ `
  mutation DeleteZone(
    $input: DeleteZoneInput!
    $condition: ModelZoneConditionInput
  ) {
    deleteZone(input: $input, condition: $condition) {
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
