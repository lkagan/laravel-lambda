<?php

declare(strict_types=1);

namespace App\Sidecar;

use Hammerstone\Sidecar\Runtime;
use Hammerstone\Sidecar\LambdaFunction;

class BasicFunction extends LambdaFunction
{

    public function handler()
    {
        return 'sidecar/basic@handler';
    }

    public function runtime()
    {
        // Not really necessary since this is default.
        return Runtime::NODEJS_14;
    }

    public function package()
    {
        return ['sidecar/basic.js'];
    }
}
