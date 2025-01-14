<script setup lang="ts">
// Define allowed input types
type InputType = "text" | "password" | "number" | "email" | "tel" | "url";

interface Props {
  id?: string;
  placeholder?: string;
  modelValue?: string;
  required?: boolean;
  inputClass?: string;
  type?: InputType; // Dynamic input type
}

const props = withDefaults(defineProps<Props>(), {
  id: "input",
  placeholder: "Enter value",
  modelValue: "",
  required: false,
  inputClass: "",
  type: "text", // Default to 'text'
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <input
    :id="id"
    :type="type"
    :value="modelValue"
    @input="handleInput"
    :placeholder="placeholder"
    :class="['input input-bordered', inputClass]"
    :required="required"
  />
</template>
