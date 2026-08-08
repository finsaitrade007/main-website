type JsonLdProps = {
  data: Record<string, unknown>;
};

/**
 * `JSON.stringify` does not escape `<`, so a CMS-authored value containing
 * `</script>` would terminate the tag early and allow arbitrary markup to be
 * injected into the page. The `structuredData` field on `shared.seo` is a
 * free-form JSON field editable from the Strapi admin, so this is reachable.
 *
 * Escaping `<`, `>` and U+2028/U+2029 as JSON unicode escapes keeps the payload
 * byte-identical to parsers while making it inert inside an HTML script tag.
 */
function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
