export const ModalCodeBlocks = [
    {
        html: `
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-only-dark-blue" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>`,
        ts1: `
            constructor(private readonly modalService: NgbModal) {}
        `,
        ts2: `
            // -->Open: the modal
            const modalRef = this.modalService.open(ModalComponent, {
                centered: true, windowClass: 'nao-modal-window-class', backdropClass: 'nao-modal-backdrop', size: 'lg',
            });
            // -->Set: data
            modalRef.componentInstance.data = data || {};
            modalRef.componentInstance.mode = 'id';
            // -->Await: result
            modalRef.result
            .then(modalRes => {
                if (modalRes && modalRes.ok) {
                // -->Refresh
                this.refresh();
                }
            })
            .catch(err => {
                this.status.error();
                this.contactsService.sharedService.swalApiError(err);
            });`
    },
    {
        html: `
        <div class="modal nao-modal-1" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-header text-white bg-dark-blue">
                        <h6 class="modal-title">Modal title</h6>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here. After deleting this you won't be able to recover it.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-only-dark-blue" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-dark-blue">Delete</button>
                    </div>
                </div>
            </div>
        </div>`
    },
    {
        html: `
        <div class="modal nao-modal-2" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header flex-column">
                        <h6 class="modal-title">Create a new user</h6>
                        <div>Subtitle for create new user</div>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.  Modal body text goes here. Modal body text goes here. Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-only-dark-blue" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>
        </div>`
    },
];