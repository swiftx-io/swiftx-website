'use client';

import * as React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from './form';
import { Input } from './input';
import { Textarea } from './textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Control } from 'react-hook-form';
import { ContactFormData } from '@/lib/schemas/contact-form';

interface BaseFormFieldProps {
  control: Control<ContactFormData>;
  name: keyof ContactFormData;
  label: string;
  placeholder: string;
  required?: boolean;
}

interface InputFormFieldProps extends BaseFormFieldProps {
  type?: 'text' | 'email' | 'tel';
}

interface TextareaFormFieldProps extends BaseFormFieldProps {
  rows?: number;
}

interface SelectFormFieldProps extends BaseFormFieldProps {
  options: { value: string; label: string }[];
}

export function CustomInputField({
  control,
  name,
  label,
  placeholder,
  required = false,
  type = 'text'
}: InputFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}{required && ' *'}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function CustomTextareaField({
  control,
  name,
  label,
  placeholder,
  required = false,
  rows = 4
}: TextareaFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}{required && ' *'}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} rows={rows} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function CustomSelectField({
  control,
  name,
  label,
  placeholder,
  required = false,
  options
}: SelectFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}{required && ' *'}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
