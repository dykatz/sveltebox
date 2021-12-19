<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ page }) => {
    let query = page.query.get("query");

    return {
      props: {
        query,
      },
    };
  };
</script>

<script>
  /** @type string */
  export let query;
</script>

Hello {query}!
