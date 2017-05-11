<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use Mail;

class Controller extends BaseController
{
	use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

	public function mail()
	{
        $data['name'] = $_POST['name'];
        $data['email'] = $_POST['email'];
        $data['subject'] = $_POST['subject'];
        $data['content'] = $_POST['message'];

        Mail::send('emails.mensaje_cliente', $data, function ($message){
            $message->subject('Mensaje de cliente web');
            $message->to('pbestudio@hotmail.com');
        });
	}
}
