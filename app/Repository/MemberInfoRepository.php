<?php 

namespace App\Repository;

use App\Models\MemberInfo;

class MemberInfoRepository {
 
    protected $model;

    public function __construct(MemberInfo $member_info)
    {
        $this->model = $member_info;
    }

    public function getUserBookIdList($user_id, $order)
    {
      return MemberInfo::where('user_id', $user_id)
        ->orderByRaw($order)
        ->pluck('book_id');
    }

    public function insert($user_id, $book_id)
    {
        $this->model::insert(["user_id" => $user_id, "book_id" => $book_id]);
    }


    public function delete($user_id, $book_id)
    {
        $this->model::where([
            ['user_id', $user_id],
            ['book_id', $book_id]
        ])->delete();
    }
}
