/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Area } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AreaUpdateForm(props) {
  const {
    id: idProp,
    area,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    dl: "",
    phone_number: "",
    apt_address: "",
    notes: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [dl, setDl] = React.useState(initialValues.dl);
  const [phone_number, setPhone_number] = React.useState(
    initialValues.phone_number
  );
  const [apt_address, setApt_address] = React.useState(
    initialValues.apt_address
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = areaRecord
      ? { ...initialValues, ...areaRecord }
      : initialValues;
    setName(cleanValues.name);
    setDl(cleanValues.dl);
    setPhone_number(cleanValues.phone_number);
    setApt_address(cleanValues.apt_address);
    setNotes(cleanValues.notes);
    setErrors({});
  };
  const [areaRecord, setAreaRecord] = React.useState(area);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Area, idProp) : area;
      setAreaRecord(record);
    };
    queryData();
  }, [idProp, area]);
  React.useEffect(resetStateValues, [areaRecord]);
  const validations = {
    name: [{ type: "Required" }],
    dl: [],
    phone_number: [{ type: "Phone" }],
    apt_address: [],
    notes: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          dl,
          phone_number,
          apt_address,
          notes,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Area.copyOf(areaRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AreaUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              dl,
              phone_number,
              apt_address,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Dl"
        isRequired={false}
        isReadOnly={false}
        value={dl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              dl: value,
              phone_number,
              apt_address,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.dl ?? value;
          }
          if (errors.dl?.hasError) {
            runValidationTasks("dl", value);
          }
          setDl(value);
        }}
        onBlur={() => runValidationTasks("dl", dl)}
        errorMessage={errors.dl?.errorMessage}
        hasError={errors.dl?.hasError}
        {...getOverrideProps(overrides, "dl")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              dl,
              phone_number: value,
              apt_address,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.phone_number ?? value;
          }
          if (errors.phone_number?.hasError) {
            runValidationTasks("phone_number", value);
          }
          setPhone_number(value);
        }}
        onBlur={() => runValidationTasks("phone_number", phone_number)}
        errorMessage={errors.phone_number?.errorMessage}
        hasError={errors.phone_number?.hasError}
        {...getOverrideProps(overrides, "phone_number")}
      ></TextField>
      <TextField
        label="Apt address"
        isRequired={false}
        isReadOnly={false}
        value={apt_address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              dl,
              phone_number,
              apt_address: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.apt_address ?? value;
          }
          if (errors.apt_address?.hasError) {
            runValidationTasks("apt_address", value);
          }
          setApt_address(value);
        }}
        onBlur={() => runValidationTasks("apt_address", apt_address)}
        errorMessage={errors.apt_address?.errorMessage}
        hasError={errors.apt_address?.hasError}
        {...getOverrideProps(overrides, "apt_address")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              dl,
              phone_number,
              apt_address,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || area)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || area) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
