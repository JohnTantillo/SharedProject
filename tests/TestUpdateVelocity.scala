package tests

import org.scalatest._
import physics.Physics
import physics.PhysicsVector
import physics.PhysicalObject
import physics.World

class TestUpdateVelocity extends FunSuite{

  test("z"){
    val world = new World( 10.0 )
    val dt: Double = 1.0
    val dt0: Double = 0.0

    val v1: PhysicsVector = new PhysicsVector( 1.0, 1.0, 1.0 )
    val lo1: PhysicsVector = new PhysicsVector( 1.0, 1.0, 1.0 )
    val obj1: PhysicalObject = new PhysicalObject( lo1, v1 )
    Physics.updateVelocity( obj1, world, dt )

    val v2: PhysicsVector = new PhysicsVector( 1.0, 1.0, -1.0 )
    val lo2: PhysicsVector = new PhysicsVector( 1.0, 1.0, 0.0 )
    val obj2: PhysicalObject = new PhysicalObject( lo2, v2 )
    Physics.updateVelocity( obj2, world, dt )

    val v3: PhysicsVector = new PhysicsVector( 1.0, 1.0, 1.0 )
    val lo3: PhysicsVector = new PhysicsVector( 1.0, 1.0, 1.0 )
    val obj3: PhysicalObject = new PhysicalObject( lo3, v3 )
    Physics.updateVelocity( obj3, world, dt0 )

    val v4: PhysicsVector = new PhysicsVector( 1.0, 1.0, 100.0 )
    val lo4: PhysicsVector = new PhysicsVector( 1.0, 1.0, 0.0 )
    val obj4: PhysicalObject = new PhysicalObject( lo4, v4 )
    Physics.updateVelocity( obj4, world, dt0 )

    assert( obj1.velocity.z == -9.0 , "test1")
    assert( obj2.velocity.z == 0.0 , "test2")
    assert( obj3.velocity.z == 1.0 , "test3")
    assert( obj4.velocity.z == 100.0 , "test4")





  }

}