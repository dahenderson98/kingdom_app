/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MissionaryCreateFormInputValues = {
    first_name?: string;
    last_name?: string;
    sex?: string;
    can_drive?: boolean;
    is_senior_companion?: boolean;
    language?: string;
    joined_mission?: string;
    leaving_mission?: string;
    hometown?: string;
    notes?: string;
};
export declare type MissionaryCreateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    sex?: ValidationFunction<string>;
    can_drive?: ValidationFunction<boolean>;
    is_senior_companion?: ValidationFunction<boolean>;
    language?: ValidationFunction<string>;
    joined_mission?: ValidationFunction<string>;
    leaving_mission?: ValidationFunction<string>;
    hometown?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MissionaryCreateFormOverridesProps = {
    MissionaryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    sex?: PrimitiveOverrideProps<SelectFieldProps>;
    can_drive?: PrimitiveOverrideProps<SwitchFieldProps>;
    is_senior_companion?: PrimitiveOverrideProps<SwitchFieldProps>;
    language?: PrimitiveOverrideProps<SelectFieldProps>;
    joined_mission?: PrimitiveOverrideProps<TextFieldProps>;
    leaving_mission?: PrimitiveOverrideProps<TextFieldProps>;
    hometown?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MissionaryCreateFormProps = React.PropsWithChildren<{
    overrides?: MissionaryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MissionaryCreateFormInputValues) => MissionaryCreateFormInputValues;
    onSuccess?: (fields: MissionaryCreateFormInputValues) => void;
    onError?: (fields: MissionaryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MissionaryCreateFormInputValues) => MissionaryCreateFormInputValues;
    onValidate?: MissionaryCreateFormValidationValues;
} & React.CSSProperties>;
export default function MissionaryCreateForm(props: MissionaryCreateFormProps): React.ReactElement;
