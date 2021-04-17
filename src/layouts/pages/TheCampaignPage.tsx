import React from "react";
import HubspotForm from "react-hubspot-form";
import { PageProps } from "gatsby";

import BaseLayout from "../BaseLayout";

import "./the-campaign.scss";

export default function TheCampaignPage({ pageContext }: PageProps<{}, { title?: string }>) {
  return (
    <BaseLayout title={pageContext.title}>
      <main className="campaign_page">
        <section className="dark cbox">
          <div className="w1000">
            <div className="centered">
              <h1>The People's House</h1>
            </div>
            <h3>
              A Campaign for Rules Reform by Act on Mass, Sunrise Boston, Mijente, and Indivisible
              Mass Coalition
            </h3>

            <p>
              What if we, the people, could reclaim our power to shape the policies that affect our
              lives? What if we could hold our state representatives accountable to actually
              representing their districts? What if we could make the State House work to uplift the
              lives of millions, fulfilling the needs of our most vulnerable neighbors?{" "}
              <strong>Imagine what transformative policies we could win.</strong>
            </p>

            <div className="centered">
              <a
                href="https://us02web.zoom.us/meeting/register/tZIocuGorzsiGN2nW2zxgB1QYgFIKseeyBZH"
                className="btn"
              >
                Sign-up for Campaign Launch on April 21
              </a>
            </div>

            <p>
              In July, the Massachusetts State House will be writing its own rulebook. We’re
              organizing constituent power in every corner of the state to ask that our legislators
              change the broken, anti-democratic rules in the State House. Together, we can make the
              State House the People’s House. Will you join us?
            </p>
          </div>
        </section>

        <section className="light-blue cbox signup">
          <div className="w1000">
            <h2>Sign up</h2>
            <div className="campaign-signup-form">
              <HubspotForm portalId="6201350" formId="fd6d4250-b852-453a-922e-705e792f4167" />
            </div>
          </div>
        </section>

        <section className="medium-blue cbox">
          <div className="w1000">
            <h2>The Massachusetts State House is Broken</h2>

            <p>
              As Massachusetts residents, we know that our state house is not working for us. Year
              after year, policies that the{" "}
              <strong>majority of people in this state support</strong> and need in order to thrive
              are voted down without a public vote, or stalled indefinitely.
            </p>

            <ul>
              <li>Protections for immigrants</li>
              <li>Medicare for All</li>
              <li>Making it easier to vote</li>
            </ul>

            <p>...and so much more.</p>

            <p>
              Why is it that, despite a Democratic supermajority, the State House fails to pass
              widely popular and desperately needed legislation?
            </p>

            <div className="centered">
              <img src="/img/newcampaign1.jpg" alt="State House" style={{ width: "500px" }} />
            </div>
          </div>
        </section>

        <section className="light-blue cbox">
          <div className="w1000">
            <h2>The Problem: The People Have Been Locked Out</h2>

            <p>
              There is a huge gap between what MA voters support, and what actually gets passed in
              our state house. We elect representatives to represent our interests, but the truth
              is, most of the time <strong>we don’t even know how they vote.</strong> Massachusetts
              has{" "}
              <a
                href="https://ballotpedia.org/Open_States%27_Legislative_Data_Report_Card"
                target="_blank"
              >
                one of the least transparent state houses in the country
              </a>
              . For ordinary Massachusetts residents, this means that:
            </p>

            <ul>
              <li>
                It's difficult to know what's going on in the State House, and advocate for the
                bills we care about.
              </li>
              <li>
                Our representatives are more accountable to corporate lobbyists and the Speaker of
                the House than to their districts.
              </li>
            </ul>

            <p>
              Democracy only works if everyday people are able to access and influence their
              government.
            </p>

            <p>
              <strong>
                What if we, the people, could reclaim our power to shape the policies that affect
                our lives?
              </strong>
            </p>

            <div className="centered">
              <img src="/img/newcampaign2.png" alt="State House" style={{ width: "500px" }} />
            </div>
          </div>
        </section>

        <section className="medium-blue cbox">
          <div className="w1000">
            <h2>The Solution: Build Constituent Power to Change the Broken Rules</h2>

            <p>
              <strong>
                Constituents are united behind the need for a more transparent and accessible state
                house.
              </strong>{" "}
              By activating this support to call for transparency, accountability and shared power
              in the state house rulebook, we can win a state house that truly works for all of us.
            </p>

            <p>
              We are modeling the representative democracy we’d like to see in our state by
              empowering thousands of constituents to organize their communities and meet with their
              representatives. Together, we’re calling for common sense reforms that will allow
              constituents to have a voice in the government that shapes our daily lives:
            </p>

            <div className="centered">
              <img src="/img/newcampaign3.png" alt="State House" style={{ width: "800px" }} />
            </div>
          </div>
        </section>

        <section className="light-blue cbox">
          <div className="w1000">
            <h2>History behind the campaign</h2>

            <p>
              In November of 2020, Act on Mass launched our Transparency is Power campaign. Between
              November and February, over 3000 constituents in 150 districts across the state and
              dozens of advocacy organizations joined our campaign for a more transparent state
              house. Largely in reaction to the power that our movement built, the Speaker of the
              House decided to delay the rules vote by six months.
            </p>
          </div>
        </section>

        <section className="medium-blue cbox">
          <div className="w1000">
            <h2>Did your Rep commit?</h2>

            <div style={{ maxWidth: "800px", margin: "1rem auto" }}>
              <div style={{ position: "relative", overflow: "hidden", paddingTop: "64%" }}>
                <iframe
                  src="https://actonmass.github.io/campaign-map/"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                ></iframe>
              </div>
            </div>
            <script src="https://unpkg.com/papaparse@5.3.0/papaparse.min.js"></script>
            <script src="https://actonmass.github.io/campaign-map/commitment-list.js"></script>
          </div>
        </section>

        <section className="light cbox">
          <div className="w1000">
            <h2>Media</h2>

            <ul>
              <li>
                <a href="https://www.bostonglobe.com/2021/04/07/metro/massachusetts-lawmakers-are-debating-their-transparency-procedures-behind-closed-doors/">
                  “Massachusetts lawmakers are debating their transparency procedures – behind
                  closed doors”
                </a>{" "}
                Emma Platoff, Boston Globe, 4/07/2021
              </li>
              <li>
                <a href="https://ottosoninsider.com/1158/news/local-activist-groups-push-for-statehouse-transparency-amendments/">
                  “Local Activist Groups Push for Statehouse Transparency Amendments”
                </a>{" "}
                Mia V., The Ottoson Insider, 02/23/2021
              </li>
              <li>
                <a href="https://www.salemnews.com/opinion/editorials/our-view-transparency-with-a-twist/article_7613c5e5-09c6-5c89-a0c0-b809b1adbc82.html">
                  “Our view: Transparency with a twist”
                </a>{" "}
                The Salem News Editorial Board, 02/18/2021
              </li>
              <li>
                <a href="https://newrepublic.com/article/161406/charlie-baker-massachusetts-democratic-party-failure">
                  “The Deep Rot of the Massachusetts Democratic Party”
                </a>{" "}
                Daniel Boguslaw, The New Republic, 2/18/2021
              </li>
              <li>
                <a href="https://www.bostonglobe.com/2021/01/19/opinion/its-time-lawmakers-support-an-open-house/">
                  “It’s time lawmakers support an open house”
                </a>{" "}
                Boston Globe Editorial Board, 01/19/2021
              </li>
              <li>
                <a href="https://www.wickedlocal.com/story/somerville-journal/2021/01/05/column-massachusetts-does-not-have-representative-democracy/6551363002/">
                  “Massachusetts Does Not Have a Representative Democracy”
                </a>{" "}
                Ella McDonald, Somerville Journal, 01/05/2021
              </li>
              <li>
                <a href="https://www.berkshireeagle.com/news/local/activists-look-to-bolster-transparency-in-massachusetts-house-come-january/article_3789b8ea-4645-11eb-90d5-df48e45fdab4.html">
                  &quot;Activists look to bolster transparency in Massachusetts House come
                  January&quot;
                </a>
                , Interview with Sophie Coyne, Berkshire Eagle, 12/27/2020
              </li>
              <li>
                <a href="https://www.metrowestdailynews.com/story/opinion/letters/2020/12/26/citizens-formed-organizing-group-act-mass-demand-transparency/4041860001/">
                  &quot;Don&#39;t let American democracy die&quot;
                </a>
                , Miriam Siegal and Scotia Hille, Metrowest Daily News, 12/26/2020
              </li>
              <li>
                <a href="https://www.bostonglobe.com/2020/12/02/opinion/police-reform-bill-is-an-example-why-public-is-distrustful-beacon-hill/">
                  &quot;Police reform bill is an example of why the public is distrustful of Beacon
                  Hill&quot;
                </a>
                , Rep. Patrick Kearney, Boston Globe, 12/2/2020
              </li>
              <li>
                <a href="https://archive.org/details/act-on-mass-enviro-show-interview-11-27-20">
                  &quot;Act on Mass Interview&quot;
                </a>
                , the Enviro Show, 11/27/2020
              </li>
              <li>
                <a href="https://commonwealthmagazine.org/state-government/retiring-rep-rep-elect-share-insights-on-state-house-opacity/">
                  &quot;Retiring rep, rep-elect share insights on State House opacity&quot;
                </a>{" "}
                Bruce Mohl, Commonwealth Magazine, 11/23/2020
              </li>
              <li>
                <a href="https://commonwealthmagazine.org/opinion/mass-is-a-participatory-democracy-in-name-only/">
                  &quot;Mass. is a participatory democracy in name only&quot;
                </a>{" "}
                Erin Leahy &amp; Ryan Daulton, Commonwealth Magazine, 11/15/2020
              </li>
            </ul>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
}
