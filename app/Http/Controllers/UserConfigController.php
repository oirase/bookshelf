<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App;

class UserConfigController extends Controller
{

    private $user;

    private $notice;

    public function __construct(Request $request)
    {
       // $this->user = App\User::where('email', $request->email)->first();
    }

    public function passwordValidator($data) {
        Validator::make($data, [
            'password'=> 'required|min:8'
        ])->validate();
    }

    public function changeUserData(Request $request)
    {
        $this->passwordValidator($request->all());

        $this->user = \Auth::user();

        if ($request->newName && $request->newName !== $this->user->name) {
            $this->changeName($request->all());
        }

        if ($request->newMail  && $request->newMail !== $this->user->email) {
            $this->changeMailAdress($request->all());
        }

        if ($request->newPassword && $request->newPassword !== $this->user->password) {
            $this->changePassword($request->all());
        }

        if ($this->notice !== '') {
            $request->session()->flash('notice', $this->notice);
        }

        return redirect()->route('index');
    }

    public function changeName($data)
    {
        Validator::make($data, [
            'newName' => 'string|max:255',
        ])->validate();

        $this->user->name = $data['newName'];
        $this->user->save();
        $this->notice = 'アカウント名を変更しました';
    }

    public function changeMailAdress($newMail)
    {
        Validator::make($data, [
            'newMail' => 'string|max:255|unique:users'
        ])->validate();

        $this->user->email = $newMail;
        $this->user->save();
        $this->notice = 'メールアドレスを変更しました';
    }

    public function changePasssword($newPassword)
    {
        Validator::make($data, [
            'newPassword'=> 'min:8|confirmed'
        ])->validate();

        $this->user->password = $newPassword;
        $this->user->save();
        $this->notice = 'パスワードを変更しました';
    }

    public function deleteUserData(Request $request)
    {
        $this->passwordValidator($request->all());
        $this->user = \Auth::user();
        $this->user->delete();
        Auth::logout();
        $this->notice = 'アカウントを削除しました';
    }

}
