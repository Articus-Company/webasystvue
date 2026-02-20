<?php

class webasystvueBackendAction extends waViewAction
{
    public function execute(): void
    {
        $this->setLayout(new webasystvueDefaultLayout());
    }
}
