<?php

namespace App\View\Components;

use Illuminate\View\Component;

class ShareButton extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public $url;

    public function __construct()
    {
        $this->url = route('index');
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.share-button');
    }
}
