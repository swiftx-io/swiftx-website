'use client';

import * as React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from './form';
import { Input } from './input';
import { Textarea } from './textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Control, ControllerRenderProps } from 'react-hook-form';

interface BaseFormFieldProps<T> {
  readonly control: Control<T>;
  readonly name: keyof T;
  readonly label: string;
  readonly required?: boolean;
  readonly className?: string;
  readonly children: (
    field: ControllerRenderProps<T, keyof T>
  ) => React.ReactNode;
}

function BaseFormField<T>({
  control,
  name,
  label,
  required = false,
  className,
  children,
}: BaseFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>
            {label}
            {required && ' *'}
          </FormLabel>
          <FormControl>{children(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

interface InputFormFieldProps<T> extends Omit<BaseFormFieldProps<T>, 'children'> {
  readonly type?: 'text' | 'email' | 'tel';
  readonly placeholder?: string;
}

interface TextareaFormFieldProps<T> extends Omit<BaseFormFieldProps<T>, 'children'> {
  readonly rows?: number;
  readonly placeholder?: string;
}

interface SelectFormFieldProps<T> extends Omit<BaseFormFieldProps<T>, 'children'> {
  readonly options: { value: string; label: string }[];
  readonly placeholder?: string;
}

export function CustomInputField<T>({ type = 'text', placeholder, ...props }: InputFormFieldProps<T>) {
  return (
    <BaseFormField {...props}>
      {field => <Input type={type} {...field} placeholder={placeholder} className="bg-background" />}
    </BaseFormField>
  );
}

export function CustomTextareaField<T>({ rows = 4, placeholder, ...props }: TextareaFormFieldProps<T>) {
  return (
    <BaseFormField {...props}>
      {field => (
        <Textarea
          rows={rows}
          {...field}
          placeholder={placeholder}
          className="bg-background min-h-[120px]"
        />
      )}
    </BaseFormField>
  );
}

export function CustomSelectField<T>({ options, placeholder, ...props }: SelectFormFieldProps<T>) {
  return (
    <BaseFormField {...props}>
      {field => (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </BaseFormField>
  );
}
