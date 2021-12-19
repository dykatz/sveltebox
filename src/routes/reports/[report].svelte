<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ page }) => {
    return {
      props: {
        report: page.params.report,
      },
    };
  };
</script>

<script>
  /** @type string */
  export let report;
</script>

Hello {report}!
