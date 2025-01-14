<template>
  <BaseAlert
    type="success"
    class="bg-base-100 absolute bottom-12 border border-error shadow shadow-error text-xl text-error w-1/4 min-w-[200px] flex justify-between"
    :remain-for="3000"
  >
    <span class="flex justify-center items-center gap-3">
      <Icon name="material-symbols:error-outline-rounded" />
      <slot />
    </span>
  </BaseAlert>
</template>
