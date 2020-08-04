<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Auth extends Component
{

    public $user;

    public $notice;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($user, $notice)
    {
        $this->user = $user;

        $this->notice = $notice;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.auth');
    }
}
