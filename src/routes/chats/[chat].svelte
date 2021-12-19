<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ page }) => {
    return {
      props: {
        chat: page.params.chat,
      },
    };
  };
</script>

<script>
  /** @type string */
  export let chat;
</script>

Hello {chat}!
