import "./content.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faChartSimple,
  faCoffee,
  faDollarSign,
  faInfoCircle,
  faMoneyBill,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Content() {
  return (
    <div class="container is-max-widescreen has-text-centered">
      <p class="title is-size-4 has-text-left">Live Data</p>
      <div class="columns">
        <div class="column is-one-third custom-card">
          <div class="card-content">
            <p class="subtitle  has-text-dark"># of Investors</p>
            <p class="title  has-text-dark">316</p>
          </div>
        </div>
        <div class="column">
          <div class="columns">
            <div class="column custom-card">
              <div className="icon-container has-background-info-light">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="has-text-info"
                />
              </div>
              <div class="card-content">
                <p class="title is-size-4">$6,449,620</p>
                <p class="subtitle is-size-6">Invested in Fairmint</p>
              </div>
            </div>
            <div class="column custom-card">
              <div className="icon-container has-background-success-light">
                <FontAwesomeIcon icon={faUser} className="has-text-primary" />
              </div>
              <div class="card-content">
                <p class="title is-size-4">$34.3M</p>
                <p class="subtitle is-size-6">Company valuation</p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column custom-card">
              <div className="icon-container has-background-success-light">
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  className="has-text-success"
                />
              </div>
              <div class="card-content">
                <p class="title is-size-4 has-text-dark">2,187,707 FAIR</p>
                <p class="subtitle is-size-6 has-text-dark">
                  Purchased by investors
                </p>
              </div>
            </div>
            <div class="column custom-card">
              <div className="icon-container has-background-danger-light">
                <FontAwesomeIcon
                  icon={faChartPie}
                  className="has-text-danger"
                />
              </div>
              <div class="card-content">
                <p class="title is-size-4 has-text-dark">35.36 %</p>
                <p class="subtitle is-size-6 has-text-dark">
                  Equity allocation (minimum)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p class="title is-size-4 has-text-left">FAIR Rolling SAFE Parameters</p>
      <div class="fair-params columns">
        <div class="column custom-card">
          <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
          <p class="title is-size-4 has-text-grey">35.36 %</p>
          <p class="subtitle is-size-6 has-text-dark">
            Investors Equity allocation
          </p>
        </div>
        <div class="column custom-card">
          <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
          <p class="title is-size-4 has-text-grey">3.36 %</p>
          <p class="subtitle is-size-6 has-text-dark">
            Stakeholders Equity allocation
          </p>
        </div>
        <div class="column custom-card">
          <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
          <p class="title is-size-4 has-text-warning-dark">12 months</p>
          <p class="subtitle is-size-6 has-text-dark">Lock-up period</p>
        </div>
        <div class="column custom-card">
          <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
          <p class="title is-size-4 has-text-success">USDC</p>
          <p class="subtitle is-size-6 has-text-dark">Reserve currency</p>
        </div>
        <div class="column custom-card">
          <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
          <p class="title is-size-4 has-text-success">$5000</p>
          <p class="subtitle is-size-6 has-text-dark">Minimum investment</p>
        </div>
      </div>
    </div>
  );
}
