export const CardsCodeBlocks = [
    {
        html: `
        <div class="card" style="max-width: 760px">
            <div class="card-header">
                Header
            </div>
            <div class="card-body">
                <h6 class="card-title">Special title treatment</h6>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer">
                Footer
            </div>
        </div>`},
    {
        html: `
        <div class="card nao-card-1" style="max-width: 760px">
            <div class="card-header">
                <h5 class="title">Nao card 1</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
            <div class="card-body py-5">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer text-right">
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`},
    {
        html: `
        <div class="nao-card-sm-dashboard bg-white d-flex align-items-center">
          <div class="d-flex flex-column">
            <span class="nao-card-subtitle">Number of deals won</span>
            <span class="nao-card-number">631</span>
            <span class="nao-card-percentage text-success">
              100%
            </span>
          </div>
        </div>`},
    {
        html: `
        <div class="nao-dashboard-lg-card bg-white">
            <div class="d-flex justify-content-between align-items-center title-container">
                <div class="nao-card-title">Closed deals</div>
                <div class="btn-group" ngbDropdown>
                    <button class="btn nao-btn-dropdown-menu-1" ngbDropdownToggle>Currency
                    </button>
                    <div ngbDropdownMenu class="nao-dropdown-dashboard-1">
                        <a class="dropdown-item" href="javascript:void(0)">Currency</a>
                        <a class="dropdown-item" href="javascript:void(0)">Percentage</a>
                    </div>
                </div>
            </div>
            <div class="nao-dashboard-card-body">
                Card body
            </div>
        </div>`},
    {
        html: `
            <div class="nao-card-board">
                <p class="m-0 align-middle text-center">Board name</p>
            </div>`},
    {
        html: `
        <div class="nao-kanban-ticket p-3">
            <div class="ticket-header">
            Ticket name
                <div class="btn-group ticket-options-btn ml-2" ngbDropdown container="body">
                    <button type="button" class="btn ticket-btn" ngbDropdownToggle>
                    </button>
                        <div ngbDropdownMenu class="nao-dropdown-1">
                        <a class="dropdown-item" href="javascript:void(0)" >Delete</a>
                    </div>
                </div>
            </div>
            <div class="ticket-body">
                Ticket body
            </div>
        </div>`},
    {
        html: `
        <div class="nao-kanban-ticket p-3">
          <div class="ticket-header">
            Ticket name
            <div class="btn-group ticket-options-btn ml-2" ngbDropdown container="body">
              <button type="button" class="btn ticket-btn" ngbDropdownToggle>

              </button>
              <div ngbDropdownMenu class="nao-dropdown-1">
                <a class="dropdown-item" href="javascript:void(0)">Delete</a>
              </div>
            </div>
          </div>
          <div class="ticket-body">
            <div class="ticket-field">
              <div class="ticket-label">
                <i class="nao-icon-arrow-dropdown-filled"></i>
                STATUS
              </div>
              <span class="nao-pill-lg bg-warning text-white">Evaluation</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                <i class="nao-icon-arrow-dropdown-filled"></i>
                PRIORITY
              </div>
              <span class="nao-pill-lg bg-danger text-white">High</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                <i class="nao-icon-dollar"></i>
                ESTIMATED VALUE
              </div>
              <span class="ticket-text">$12,102</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                <i class="nao-icon-item-list"></i>
                ACCOUNT
              </div>
              <span class="badge badge-grey">Enviromerica</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                <i class="nao-icon-item-list"></i>
                PRIMARY CONTACT
              </div>
              <span class="badge badge-grey">Julian Goduci</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                <i class="nao-icon-item-list"></i>
                INTERACTIONS
              </div>
              <span class="badge badge-grey">Touch One - Proposal Stage</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                <i class="nao-icon-item-list"></i>
                KEY DECISION MAKER
              </div>
              <span class="badge badge-grey">Tom Joyce</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                <i class="nao-icon-calendar"></i>
                EXPECTED CLOSE DATE
              </div>
              <span class="ticket-text">21/12/2019</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                <i class="nao-icon-envelope-2"></i>
                LAST CONTACT
              </div>
              <span class="ticket-text">12/6/2019</span>
            </div>

            <div class="ticket-field">
              <div class="ticket-label">
                <i class="nao-icon-profile-male"></i>
                Owner
              </div>
              <div class="ticket-avatar-icon">
                <span class="badge badge-avatar">
                  Tom Joyce</span>
                <span class="initial-avatar">
                  T
                </span>
              </div>
            </div>

          </div>
        </div>`},
        {
            html: `
            <div class="nao-kanban-lane">
                <div class="nao-lane-header">
                    In progress
                    <div class="btn-group float-right ml-2" ngbDropdown container="body">
                        <button type="button" class="btn ticket-btn" ngbDropdownToggle>
                        </button>
                        <div ngbDropdownMenu class="nao-dropdown-1">
                        <a class="dropdown-item" href="javascript:void(0)">Delete</a>
                        </div>
                    </div>
                </div>
                <div class="nao-lane-footer">
                    <span class="number-cards">0 cards</span>
                    <span class="circle-icon nao-icon-add"></span>
                </div>
            </div>`
        },
        {
            html: `
            <div class="nao-kanban-lane">
                <div class="nao-lane-header">
                        In progress
                        <div class="btn-group float-right ml-2" ngbDropdown container="body">
                            <button type="button" class="btn ticket-btn" ngbDropdownToggle>
                            </button>
                            <div ngbDropdownMenu class="nao-dropdown-1">
                                <a class="dropdown-item" href="javascript:void(0)">Delete</a>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="nao-kanban-ticket p-3">
                    <div class="ticket-header">
                        Ticket name
                        <div class="btn-group ticket-options-btn ml-2" ngbDropdown container="body">
                            <button type="button" class="btn ticket-btn" ngbDropdownToggle>
                            </button>
                            <div ngbDropdownMenu class="nao-dropdown-1">
                                <a class="dropdown-item" href="javascript:void(0)">Delete</a>
                            </div>
                        </div>
                    </div>
                    <div class="ticket-body">
                        <div class="ticket-field">
                            <div class="ticket-label">
                                <i class="nao-icon-arrow-dropdown-filled"></i>
                                STATUS
                            </div>
                            <span class="nao-pill-lg bg-warning text-white">Evaluation</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                <i class="nao-icon-arrow-dropdown-filled"></i>
                                PRIORITY
                            </div>
                            <span class="nao-pill-lg bg-danger text-white">High</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                <i class="nao-icon-dollar"></i>
                                ESTIMATED VALUE
                            </div>
                            <span class="ticket-text">$12,102</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                <i class="nao-icon-item-list"></i>
                                ACCOUNT
                            </div>
                            <span class="badge badge-grey">Enviromerica</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                <i class="nao-icon-item-list"></i>
                                PRIMARY CONTACT
                            </div>
                            <span class="badge badge-grey">Julian Goduci</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                <i class="nao-icon-item-list"></i>
                                INTERACTIONS
                            </div>
                            <span class="badge badge-grey">Touch One - Proposal Stage</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                <i class="nao-icon-item-list"></i>
                                KEY DECISION MAKER
                            </div>
                            <span class="badge badge-grey">Tom Joyce</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                <i class="nao-icon-calendar"></i>
                                EXPECTED CLOSE DATE
                            </div>
                            <span class="ticket-text">21/12/2019</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                <i class="nao-icon-envelope-2"></i>
                                LAST CONTACT
                            </div>
                            <span class="ticket-text">12/6/2019</span>
                        </div>

                        <div class="ticket-field">
                            <div class="ticket-label">
                                <i class="nao-icon-profile-male"></i>
                                Owner
                            </div>
                            <div class="ticket-avatar-icon">
                                <span class="badge badge-avatar">
                                Tom Joyce</span>
                                <span class="initial-avatar">
                                T
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="nao-lane-footer">
                        <span class="number-cards">1 card</span>
                        <span class="circle-icon nao-icon-add"></span>
                    </div>
                </div>`
        },
    {
        html: `
        <div>
            <div class="nao-card-form-1">
            <form>
                <div class="form-group">
                    <label class="nao-label-sm-3">Email</label>
                    <input name="email" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label class="nao-label-sm-3">Password</label>
                    <input name="password" type="password" class="form-control">
                </div>
                <div class="mb-3">
                <button type="submit" class="btn btn-primary w-100">
                    Login to your account
                </button>
                </div>
                    <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="rememberMe" id="rememberMe">
                    <label class="custom-control-label nao-label-sm-3 pt-1" for="rememberMe">Remember me</label>
                    </label>
                <hr />
                <a href="javascript:void(0)" class="forgot-pass">
                Forgot password?
                </a>
            </form>
            </div>
            <div class="d-flex align-items-center nao-under-card-message">
                <div>Don’t have an account yet?</div>
                <a class="btn btn-outline-only-primary px-0 py-1">Try for free</a>
            </div>
        </div>`
    }
];
