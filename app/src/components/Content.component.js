import "./content.styles.scss";

export default function Content() {
  return (
    <div class="container is-max-widescreen has-text-centered">
      <p class="title is-size-4 has-text-left">Live Data</p>
      <div class="columns">
        <div class="column is-one-third card">
          <p class="subtitle  has-text-dark"># of Investors</p>
          <p class="title  has-text-dark">316</p>
        </div>
        <div class="column">
          <div class="columns">
            <div class="column card">
              <p class="title is-size-4 has-text-dark">$6,449,620</p>
              <p class="subtitle is-size-6 has-text-dark">
                Invested in Fairmint
              </p>
            </div>
            <div class="column card">
              <p class="title is-size-4 has-text-dark">$34.3M</p>
              <p class="subtitle is-size-6 has-text-dark">Company valuation</p>
            </div>
          </div>
          <div class="columns">
            <div class="column card">
              <p class="title is-size-4 has-text-dark">2,187,707 FAIR</p>
              <p class="subtitle is-size-6 has-text-dark">
                Purchased by investors
              </p>
            </div>
            <div class="column card">
              <p class="title is-size-4 has-text-dark">35.36 %</p>
              <p class="subtitle is-size-6 has-text-dark">
                Equity allocation (minimum)
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p class="title is-size-4 has-text-left">FAIR Rolling SAFE Parameters</p>
      <div class="fair-params columns">
        <div class="column card">
          <p class="title is-size-4 has-text-dark">35.36 %</p>
          <p class="subtitle is-size-6 has-text-dark">
            Investors Equity allocation
          </p>
        </div>
        <div class="column card">
          <p class="title is-size-4 has-text-dark">3.36 %</p>
          <p class="subtitle is-size-6 has-text-dark">
            Stakeholders Equity allocation
          </p>
        </div>
        <div class="column card">
          <p class="title is-size-4 has-text-dark">12 months</p>
          <p class="subtitle is-size-6 has-text-dark">Lock-up period</p>
        </div>
        <div class="column card">
          <p class="title is-size-4 has-text-dark">USDC</p>
          <p class="subtitle is-size-6 has-text-dark">Reserve currency</p>
        </div>
        <div class="column card">
          <p class="title is-size-4 has-text-dark">$5000</p>
          <p class="subtitle is-size-6 has-text-dark">Minimum investment</p>
        </div>
      </div>
    </div>
  );
}
