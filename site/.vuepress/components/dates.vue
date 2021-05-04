<template>
  <span>from {{ startDate }} to {{ endDate }}</span>
</template>

<script>
const formatDate = (date) => date.toUTCString().replace(',', '').replace(/:\d\d\sGMT/, ' GMT');

export default {
  data() {
    return {
      startDate: formatDate(new Date(process.env.CNS_START_DATE)),
      endDate: formatDate(new Date(process.env.CNS_END_DATE))
    };
  }
};
</script>