<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ page }) => {
    return {
      props: {
        tag: page.params.tag,
      },
    };
  };
</script>

<script>
  /** @type string */
  export let tag;
</script>

Hello {tag}!
