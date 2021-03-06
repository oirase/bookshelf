<?php

namespace App\View\Components;

use Illuminate\View\Component;

class test extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public $alertType;
    public $message;

    public function __construct($type, $message)
    {
        $this->type = $type;
        $this->message = $message;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        //return view('components.test');
        return <<<'blade'
            <p>good evening</p>
        blade;

    }
}
