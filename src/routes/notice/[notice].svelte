<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ page }) => {
    return {
      props: {
        notice: page.params.notice,
      },
    };
  };
</script>

<script>
  /** @type string */
  export let notice;
</script>

Hello {notice}!
