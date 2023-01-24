/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ZoneCreateFormInputValues = {
    name?: string;
    note?: string;
};
export declare type ZoneCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    note?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ZoneCreateFormOverridesProps = {
    ZoneCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    note?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ZoneCreateFormProps = React.PropsWithChildren<{
    overrides?: ZoneCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ZoneCreateFormInputValues) => ZoneCreateFormInputValues;
    onSuccess?: (fields: ZoneCreateFormInputValues) => void;
    onError?: (fields: ZoneCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ZoneCreateFormInputValues) => ZoneCreateFormInputValues;
    onValidate?: ZoneCreateFormValidationValues;
} & React.CSSProperties>;
export default function ZoneCreateForm(props: ZoneCreateFormProps): React.ReactElement;
