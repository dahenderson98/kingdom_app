import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE"
}

export enum Language {
  ENGLISH = "ENGLISH",
  SPANISH = "SPANISH",
  MANDARIN = "MANDARIN"
}



type EagerMissionary = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Missionary, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly sex?: Sex | keyof typeof Sex | null;
  readonly can_drive?: boolean | null;
  readonly is_senior_companion?: boolean | null;
  readonly language?: Language | keyof typeof Language | null;
  readonly joined_mission?: string | null;
  readonly leaving_mission?: string | null;
  readonly hometown?: string | null;
  readonly notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMissionary = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Missionary, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly sex?: Sex | keyof typeof Sex | null;
  readonly can_drive?: boolean | null;
  readonly is_senior_companion?: boolean | null;
  readonly language?: Language | keyof typeof Language | null;
  readonly joined_mission?: string | null;
  readonly leaving_mission?: string | null;
  readonly hometown?: string | null;
  readonly notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Missionary = LazyLoading extends LazyLoadingDisabled ? EagerMissionary : LazyMissionary

export declare const Missionary: (new (init: ModelInit<Missionary>) => Missionary) & {
  copyOf(source: Missionary, mutator: (draft: MutableModel<Missionary>) => MutableModel<Missionary> | void): Missionary;
}

type EagerArea = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Area, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly zone?: string | null;
  readonly dl?: string | null;
  readonly phone_number?: string | null;
  readonly apt_address?: string | null;
  readonly notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArea = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Area, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly zone?: string | null;
  readonly dl?: string | null;
  readonly phone_number?: string | null;
  readonly apt_address?: string | null;
  readonly notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Area = LazyLoading extends LazyLoadingDisabled ? EagerArea : LazyArea

export declare const Area: (new (init: ModelInit<Area>) => Area) & {
  copyOf(source: Area, mutator: (draft: MutableModel<Area>) => MutableModel<Area> | void): Area;
}

type EagerZone = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Zone, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly areas?: (Area | null)[] | null;
  readonly zl_1?: Missionary | null;
  readonly zl_2?: Missionary | null;
  readonly stl_1?: Missionary | null;
  readonly stl_2?: Missionary | null;
  readonly note?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly zoneZl_1Id?: string | null;
  readonly zoneZl_2Id?: string | null;
  readonly zoneStl_1Id?: string | null;
  readonly zoneStl_2Id?: string | null;
}

type LazyZone = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Zone, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly areas: AsyncCollection<Area>;
  readonly zl_1: AsyncItem<Missionary | undefined>;
  readonly zl_2: AsyncItem<Missionary | undefined>;
  readonly stl_1: AsyncItem<Missionary | undefined>;
  readonly stl_2: AsyncItem<Missionary | undefined>;
  readonly note?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly zoneZl_1Id?: string | null;
  readonly zoneZl_2Id?: string | null;
  readonly zoneStl_1Id?: string | null;
  readonly zoneStl_2Id?: string | null;
}

export declare type Zone = LazyLoading extends LazyLoadingDisabled ? EagerZone : LazyZone

export declare const Zone: (new (init: ModelInit<Zone>) => Zone) & {
  copyOf(source: Zone, mutator: (draft: MutableModel<Zone>) => MutableModel<Zone> | void): Zone;
}