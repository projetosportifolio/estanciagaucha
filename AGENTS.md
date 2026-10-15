<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Restaurant business facts and menu entries live in separate browser-safe data modules so branding and confirmation-sensitive values can be updated without page rewrites.
- Shared restaurant navigation and footer wrap one main landmark in the root route; each public content page owns its metadata.
- Food and venue assets are generated illustrations, not documentary photos; visible disclosure must remain until replaced by verified restaurant photos.
- When WhatsApp is absent, orders link to Anota AI and reservation forms explicitly require a phone confirmation; never claim a booking was sent.
