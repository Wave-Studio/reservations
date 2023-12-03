// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_public_faq from "./routes/(public)/faq.tsx";
import * as $_public_features from "./routes/(public)/features.tsx";
import * as $_public_pricing from "./routes/(public)/pricing.tsx";
import * as $_public_privacy_policy from "./routes/(public)/privacy-policy.tsx";
import * as $_public_terms_of_service from "./routes/(public)/terms-of-service.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $api_auth_login from "./routes/api/auth/login.ts";
import * as $api_auth_signout from "./routes/api/auth/signout.ts";
import * as $api_events_create from "./routes/api/events/create.ts";
import * as $api_events_delete from "./routes/api/events/delete.ts";
import * as $api_events_edit from "./routes/api/events/edit.ts";
import * as $api_events_fetch from "./routes/api/events/fetch.ts";
import * as $api_events_image_fill from "./routes/api/events/image/fill.ts";
import * as $api_events_image_upload from "./routes/api/events/image/upload.ts";
import * as $api_events_scan from "./routes/api/events/scan.ts";
import * as $api_events_team_invite from "./routes/api/events/team/invite.ts";
import * as $api_events_team_remove from "./routes/api/events/team/remove.ts";
import * as $api_events_team_update from "./routes/api/events/team/update.ts";
import * as $api_events_ticket from "./routes/api/events/ticket.ts";
import * as $events_pages_layout from "./routes/events/(pages)/_layout.tsx";
import * as $events_pages_attending_layout from "./routes/events/(pages)/attending/_layout.tsx";
import * as $events_pages_attending_index from "./routes/events/(pages)/attending/index.tsx";
import * as $events_pages_organizing_layout from "./routes/events/(pages)/organizing/_layout.tsx";
import * as $events_pages_organizing_accounting from "./routes/events/(pages)/organizing/accounting.tsx";
import * as $events_pages_organizing_collections from "./routes/events/(pages)/organizing/collections.tsx";
import * as $events_pages_organizing_create from "./routes/events/(pages)/organizing/create.tsx";
import * as $events_pages_organizing_discounts from "./routes/events/(pages)/organizing/discounts.tsx";
import * as $events_pages_organizing_index from "./routes/events/(pages)/organizing/index.tsx";
import * as $events_id_no_layout_layout from "./routes/events/[id]/(no-layout)/_layout.tsx";
import * as $events_id_no_layout_index from "./routes/events/[id]/(no-layout)/index.tsx";
import * as $events_id_no_layout_tickets_tixid_ from "./routes/events/[id]/(no-layout)/tickets/[tixid].tsx";
import * as $events_id_layout from "./routes/events/[id]/_layout.tsx";
import * as $events_id_editing from "./routes/events/[id]/editing.tsx";
import * as $events_id_scanning from "./routes/events/[id]/scanning.tsx";
import * as $events_id_team from "./routes/events/[id]/team.tsx";
import * as $events_id_tickets from "./routes/events/[id]/tickets.tsx";
import * as $events_notfound from "./routes/events/notfound.tsx";
import * as $index from "./routes/index.tsx";
import * as $kv_insights_layout from "./routes/kv-insights/_layout.tsx";
import * as $kv_insights_middleware from "./routes/kv-insights/_middleware.ts";
import * as $login from "./routes/login.tsx";
import * as $components_dropinUI_trash from "./islands/components/dropinUI/trash.tsx";
import * as $components_peices_ticket from "./islands/components/peices/ticket.tsx";
import * as $components_pickers_calender from "./islands/components/pickers/calender.tsx";
import * as $components_pickers_dropdown from "./islands/components/pickers/dropdown.tsx";
import * as $components_pickers_image from "./islands/components/pickers/image.tsx";
import * as $components_pickers_select from "./islands/components/pickers/select.tsx";
import * as $components_pickers_time from "./islands/components/pickers/time.tsx";
import * as $entriesManagement from "./islands/entriesManagement.tsx";
import * as $entryManagement from "./islands/entryManagement.tsx";
import * as $events_components_card from "./islands/events/components/card.tsx";
import * as $events_components_registerErrors from "./islands/events/components/registerErrors.tsx";
import * as $events_creation_createForm from "./islands/events/creation/createForm.tsx";
import * as $events_creation_one from "./islands/events/creation/one.tsx";
import * as $events_creation_three from "./islands/events/creation/three.tsx";
import * as $events_creation_two from "./islands/events/creation/two.tsx";
import * as $events_creation_zero from "./islands/events/creation/zero.tsx";
import * as $events_editing_delete from "./islands/events/editing/delete.tsx";
import * as $events_editing_images from "./islands/events/editing/images.tsx";
import * as $events_editing_settings from "./islands/events/editing/settings.tsx";
import * as $events_editing_showtimeSelector from "./islands/events/editing/showtimeSelector.tsx";
import * as $events_editing_showtimesettings from "./islands/events/editing/showtimesettings.tsx";
import * as $events_editing_ticketSettings from "./islands/events/editing/ticketSettings.tsx";
import * as $events_list_filters from "./islands/events/list/filters.tsx";
import * as $events_scanning from "./islands/events/scanning.tsx";
import * as $events_teams_filters from "./islands/events/teams/filters.tsx";
import * as $events_teams_invite from "./islands/events/teams/invite.tsx";
import * as $events_teams_manage from "./islands/events/teams/manage.tsx";
import * as $events_viewing_availability from "./islands/events/viewing/availability.tsx";
import * as $events_viewing_register from "./islands/events/viewing/register.tsx";
import * as $events_viewing_selectShowTime from "./islands/events/viewing/selectShowTime.tsx";
import * as $events_viewing_showtimes from "./islands/events/viewing/showtimes.tsx";
import * as $loginForm from "./islands/loginForm.tsx";
import * as $queueManagement from "./islands/queueManagement.tsx";
import * as $tickets_filters from "./islands/tickets/filters.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/(public)/faq.tsx": $_public_faq,
    "./routes/(public)/features.tsx": $_public_features,
    "./routes/(public)/pricing.tsx": $_public_pricing,
    "./routes/(public)/privacy-policy.tsx": $_public_privacy_policy,
    "./routes/(public)/terms-of-service.tsx": $_public_terms_of_service,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/api/auth/login.ts": $api_auth_login,
    "./routes/api/auth/signout.ts": $api_auth_signout,
    "./routes/api/events/create.ts": $api_events_create,
    "./routes/api/events/delete.ts": $api_events_delete,
    "./routes/api/events/edit.ts": $api_events_edit,
    "./routes/api/events/fetch.ts": $api_events_fetch,
    "./routes/api/events/image/fill.ts": $api_events_image_fill,
    "./routes/api/events/image/upload.ts": $api_events_image_upload,
    "./routes/api/events/scan.ts": $api_events_scan,
    "./routes/api/events/team/invite.ts": $api_events_team_invite,
    "./routes/api/events/team/remove.ts": $api_events_team_remove,
    "./routes/api/events/team/update.ts": $api_events_team_update,
    "./routes/api/events/ticket.ts": $api_events_ticket,
    "./routes/events/(pages)/_layout.tsx": $events_pages_layout,
    "./routes/events/(pages)/attending/_layout.tsx":
      $events_pages_attending_layout,
    "./routes/events/(pages)/attending/index.tsx":
      $events_pages_attending_index,
    "./routes/events/(pages)/organizing/_layout.tsx":
      $events_pages_organizing_layout,
    "./routes/events/(pages)/organizing/accounting.tsx":
      $events_pages_organizing_accounting,
    "./routes/events/(pages)/organizing/collections.tsx":
      $events_pages_organizing_collections,
    "./routes/events/(pages)/organizing/create.tsx":
      $events_pages_organizing_create,
    "./routes/events/(pages)/organizing/discounts.tsx":
      $events_pages_organizing_discounts,
    "./routes/events/(pages)/organizing/index.tsx":
      $events_pages_organizing_index,
    "./routes/events/[id]/(no-layout)/_layout.tsx": $events_id_no_layout_layout,
    "./routes/events/[id]/(no-layout)/index.tsx": $events_id_no_layout_index,
    "./routes/events/[id]/(no-layout)/tickets/[tixid].tsx":
      $events_id_no_layout_tickets_tixid_,
    "./routes/events/[id]/_layout.tsx": $events_id_layout,
    "./routes/events/[id]/editing.tsx": $events_id_editing,
    "./routes/events/[id]/scanning.tsx": $events_id_scanning,
    "./routes/events/[id]/team.tsx": $events_id_team,
    "./routes/events/[id]/tickets.tsx": $events_id_tickets,
    "./routes/events/notfound.tsx": $events_notfound,
    "./routes/index.tsx": $index,
    "./routes/kv-insights/_layout.tsx": $kv_insights_layout,
    "./routes/kv-insights/_middleware.ts": $kv_insights_middleware,
    "./routes/login.tsx": $login,
  },
  islands: {
    "./islands/components/dropinUI/trash.tsx": $components_dropinUI_trash,
    "./islands/components/peices/ticket.tsx": $components_peices_ticket,
    "./islands/components/pickers/calender.tsx": $components_pickers_calender,
    "./islands/components/pickers/dropdown.tsx": $components_pickers_dropdown,
    "./islands/components/pickers/image.tsx": $components_pickers_image,
    "./islands/components/pickers/select.tsx": $components_pickers_select,
    "./islands/components/pickers/time.tsx": $components_pickers_time,
    "./islands/entriesManagement.tsx": $entriesManagement,
    "./islands/entryManagement.tsx": $entryManagement,
    "./islands/events/components/card.tsx": $events_components_card,
    "./islands/events/components/registerErrors.tsx":
      $events_components_registerErrors,
    "./islands/events/creation/createForm.tsx": $events_creation_createForm,
    "./islands/events/creation/one.tsx": $events_creation_one,
    "./islands/events/creation/three.tsx": $events_creation_three,
    "./islands/events/creation/two.tsx": $events_creation_two,
    "./islands/events/creation/zero.tsx": $events_creation_zero,
    "./islands/events/editing/delete.tsx": $events_editing_delete,
    "./islands/events/editing/images.tsx": $events_editing_images,
    "./islands/events/editing/settings.tsx": $events_editing_settings,
    "./islands/events/editing/showtimeSelector.tsx":
      $events_editing_showtimeSelector,
    "./islands/events/editing/showtimesettings.tsx":
      $events_editing_showtimesettings,
    "./islands/events/editing/ticketSettings.tsx":
      $events_editing_ticketSettings,
    "./islands/events/list/filters.tsx": $events_list_filters,
    "./islands/events/scanning.tsx": $events_scanning,
    "./islands/events/teams/filters.tsx": $events_teams_filters,
    "./islands/events/teams/invite.tsx": $events_teams_invite,
    "./islands/events/teams/manage.tsx": $events_teams_manage,
    "./islands/events/viewing/availability.tsx": $events_viewing_availability,
    "./islands/events/viewing/register.tsx": $events_viewing_register,
    "./islands/events/viewing/selectShowTime.tsx":
      $events_viewing_selectShowTime,
    "./islands/events/viewing/showtimes.tsx": $events_viewing_showtimes,
    "./islands/loginForm.tsx": $loginForm,
    "./islands/queueManagement.tsx": $queueManagement,
    "./islands/tickets/filters.tsx": $tickets_filters,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
