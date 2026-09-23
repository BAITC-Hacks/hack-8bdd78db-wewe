# Four-minute-forty-five-second demonstration

Start with `npm start`, open http://localhost:3000, and select **Business**. Use the default local mock mode. Seed data makes proposal comparison and catalog variety immediately available.

## 0:00–0:30 — The problem

Show the overview and click **Create a task**. Enter:

> Our shop keeps running out of popular products. Stock planning takes too long.

Click **Help me clarify this**. Point out the **Local mock mode** label and seven relevant questions. No information is invented.

## 0:30–1:30 — Clarify and review

Keep the prefilled context. Answer just these two questions:

- Target users: `Our shop manager and purchasing assistant.`
- Data: `Six months of anonymized sales CSVs and our product list are available.`

Leave the other four answers empty. Click **Build editable brief**. Enter title `Smarter weekly stock planning`, and topic `Retail`. Show that missing answers stayed empty and all fields are editable. Click **Save draft**.

The score is **0** because nothing has been confirmed. Click **Confirm reviewed card**. The score becomes **50 / Developing**. Point to the category breakdown and missing-information suggestions.

## 1:30–2:30 — Improve and publish

Click **Edit brief**, and fill:

- Constraints: `Deliver a prototype in three weeks using free tools and anonymized data.`
- Expected result: `A dashboard that recommends weekly reorder quantities from uploaded CSVs.`
- Success criteria: `Reduce weekly planning from 6 hours to 3 hours during a four-week pilot.`
- Contact: `Shop owner at demo@example.com; weekly online review calls.`

Click **Save changes**. The score stays **50** until **Confirm reviewed card** is clicked, then becomes **100 / Priority**. Click **Publish task**, then **Task catalog**. It appears in the top readiness group. Show the 20-point community task is also visible and open; use the Draft readiness filter, then clear it.

## 2:30–3:30 — Student proposal

Switch to **Student team**, open your new task, and click **Submit a proposal**. Select **Steppe AI** and paste:

- Solution idea: `Build a lightweight dashboard that turns weekly sales CSVs into reorder suggestions.`
- Plan: `Interview the owner, inspect sample CSVs, build the dashboard, and evaluate it on a four-week pilot.`
- Estimated timeline: `3 weeks`
- Prototype URL: `https://example.com/stock-prototype`

Click **Submit proposal**. Explain that this example URL stands in for the team's real prototype link. Show the pending status.

## 3:30–4:15 — Business choice and verified progress

Switch back to **Business**. Accept the new proposal manually. Explain that other teams remain eligible and the business may accept several or none. Click **Confirm prototype** only as a demonstration of reviewed work: it awards 25 points and the button becomes disabled. Open **Student teams** and show Steppe AI's points.

Open **Proposals** to compare three seed proposals on the shop task. Reject one, leaving other choices independent.

## 4:15–4:45 — Persistence and close

Refresh the page. Show that the decision and team points remain. Open the catalog and recap: **vague challenge → questions → reviewed brief → transparent readiness → proposal → human decision**. Mention that automated tests also verify server-restart persistence and malformed AI-response fallback.
