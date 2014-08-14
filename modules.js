define('famous/core/Entity',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.core.Entity = {
        register: register,
        unregister: unregister,
        get: get,
        set: set
    };
});

define('famous/core/Transform',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.core.Transform = Transform;
});

define('famous/core/SpecParser',['require','exports','module','./Transform'],function(require, exports, module) {
    var Transform = require('./Transform');

    module.exports = famous.core.SpecParser = SpecParser;
});

define('famous/core/RenderNode',['require','exports','module','./Entity','./SpecParser'],function(require, exports, module) {
    var Entity = require('./Entity');
    var SpecParser = require('./SpecParser');

    module.exports = famous.core.RenderNode = RenderNode;
});

define('famous/core/EventEmitter',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.core.EventEmitter = EventEmitter;
});

define('famous/core/EventHandler',['require','exports','module','./EventEmitter'],function(require, exports, module) {
    var EventEmitter = require('./EventEmitter');

    module.exports = famous.core.EventHandler = EventHandler;
});

define('famous/core/ElementAllocator',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.core.ElementAllocator = ElementAllocator;
});

define('famous/utilities/Utility',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.utilities.Utility = Utility;
});

define('famous/transitions/MultipleTransition',['require','exports','module','famous/utilities/Utility'],function(require, exports, module) {
    var Utility = require('famous/utilities/Utility');

    module.exports = famous.transitions.MultipleTransition = MultipleTransition;
});

define('famous/transitions/TweenTransition',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.transitions.TweenTransition = TweenTransition;
});

define('famous/transitions/Transitionable',['require','exports','module','./MultipleTransition','./TweenTransition'],function(require, exports, module) {
    var MultipleTransition = require('./MultipleTransition');
    var TweenTransition = require('./TweenTransition');

    module.exports = famous.transitions.Transitionable = Transitionable;
});

define('famous/core/Context',['require','exports','module','./RenderNode','./EventHandler','./ElementAllocator','./Transform','famous/transitions/Transitionable'],function(require, exports, module) {
    var RenderNode = require('./RenderNode');
    var EventHandler = require('./EventHandler');
    var ElementAllocator = require('./ElementAllocator');
    var Transform = require('./Transform');
    var Transitionable = require('famous/transitions/Transitionable');

    module.exports = famous.core.Context = Context;
});

define('famous/core/OptionsManager',['require','exports','module','./EventHandler'],function(require, exports, module) {
    var EventHandler = require('./EventHandler');

    module.exports = famous.core.OptionsManager = OptionsManager;
});

define('famous/core/Engine',['require','exports','module','./Context','./EventHandler','./OptionsManager'],function(require, exports, module) {
    var Context = require('./Context');
    var EventHandler = require('./EventHandler');
    var OptionsManager = require('./OptionsManager');

    module.exports = famous.core.Engine = Engine;
});

define('famous/core/ElementOutput',['require','exports','module','./Entity','./EventHandler','./Transform'],function(require, exports, module) {
    var Entity = require('./Entity');
    var EventHandler = require('./EventHandler');
    var Transform = require('./Transform');

    module.exports = famous.core.ElementOutput = ElementOutput;
});

define('famous/core/Surface',['require','exports','module','./ElementOutput'],function(require, exports, module) {
    var ElementOutput = require('./ElementOutput');

    module.exports = famous.core.Surface = Surface;
});

define('famous/core/Group',['require','exports','module','./Context','./Transform','./Surface'],function(require, exports, module) {
    var Context = require('./Context');
    var Transform = require('./Transform');
    var Surface = require('./Surface');

    module.exports = famous.core.Group = Group;
});

define('famous/transitions/TransitionableTransform',['require','exports','module','./Transitionable','famous/core/Transform','famous/utilities/Utility'],function(require, exports, module) {
    var Transitionable = require('./Transitionable');
    var Transform = require('famous/core/Transform');
    var Utility = require('famous/utilities/Utility');

    module.exports = famous.transitions.TransitionableTransform = TransitionableTransform;
});

define('famous/core/Modifier',['require','exports','module','./Transform','famous/transitions/Transitionable','famous/transitions/TransitionableTransform'],function(require, exports, module) {
    var Transform = require('./Transform');

    /* TODO: remove these dependencies when deprecation complete */
    var Transitionable = require('famous/transitions/Transitionable');
    var TransitionableTransform = require('famous/transitions/TransitionableTransform');

    module.exports = famous.core.Modifier = Modifier;
});

define('famous/core/Scene',['require','exports','module','./Transform','./Modifier','./RenderNode'],function(require, exports, module) {
    var Transform = require('./Transform');
    var Modifier = require('./Modifier');
    var RenderNode = require('./RenderNode');

    module.exports = famous.core.Scene = Scene;
});

define('famous/core/View',['require','exports','module','./EventHandler','./OptionsManager','./RenderNode','famous/utilities/Utility'],function(require, exports, module) {
    var EventHandler = require('./EventHandler');
    var OptionsManager = require('./OptionsManager');
    var RenderNode = require('./RenderNode');
    var Utility = require('famous/utilities/Utility');

    module.exports = famous.core.View = View;
});

define('famous/core/ViewSequence',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.core.ViewSequence = ViewSequence;
});

define('famous/events/EventArbiter',['require','exports','module','famous/core/EventHandler'],function(require, exports, module) {
    var EventHandler = require('famous/core/EventHandler');

    module.exports = famous.events.EventArbiter = EventArbiter;
});

define('famous/events/EventFilter',['require','exports','module','famous/core/EventHandler'],function(require, exports, module) {
    var EventHandler = require('famous/core/EventHandler');

    module.exports = famous.events.EventFilter = EventFilter;
});

define('famous/events/EventMapper',['require','exports','module','famous/core/EventHandler'],function(require, exports, module) {
    var EventHandler = require('famous/core/EventHandler');

    module.exports = famous.events.EventMapper = EventMapper;
});

define('famous/inputs/FastClick',['require','exports','module'],function(require, exports, module) {
});

define('famous/inputs/GenericSync',['require','exports','module','famous/core/EventHandler'],function(require, exports, module) {
    var EventHandler = require('famous/core/EventHandler');

    module.exports = famous.inputs.GenericSync = GenericSync;
});

define('famous/inputs/MouseSync',['require','exports','module','famous/core/EventHandler'],function(require, exports, module) {
    var EventHandler = require('famous/core/EventHandler');

    module.exports = famous.inputs.MouseSync = MouseSync;
});

define('famous/inputs/TwoFingerSync',['require','exports','module','famous/core/EventHandler'],function(require, exports, module) {
    var EventHandler = require('famous/core/EventHandler');

    module.exports = famous.inputs.TwoFingerSync = TwoFingerSync;
});

define('famous/inputs/PinchSync',['require','exports','module','./TwoFingerSync'],function(require, exports, module) {
    var TwoFingerSync = require('./TwoFingerSync');

    module.exports = famous.inputs.PinchSync = PinchSync;
});

define('famous/inputs/RotateSync',['require','exports','module','./TwoFingerSync'],function(require, exports, module) {
    var TwoFingerSync = require('./TwoFingerSync');

    module.exports = famous.inputs.RotateSync = RotateSync;
});

define('famous/inputs/ScaleSync',['require','exports','module','./TwoFingerSync'],function(require, exports, module) {
    var TwoFingerSync = require('./TwoFingerSync');

    module.exports = famous.inputs.ScaleSync = ScaleSync;
});

define('famous/inputs/ScrollSync',['require','exports','module','famous/core/EventHandler','famous/core/Engine'],function(require, exports, module) {
    var EventHandler = require('famous/core/EventHandler');
    var Engine = require('famous/core/Engine');

    module.exports = famous.inputs.ScrollSync = ScrollSync;
});

define('famous/inputs/TouchTracker',['require','exports','module','famous/core/EventHandler'],function(require, exports, module) {
    var EventHandler = require('famous/core/EventHandler');

    module.exports = famous.inputs.TouchTracker = TouchTracker;
});

define('famous/inputs/TouchSync',['require','exports','module','./TouchTracker','famous/core/EventHandler'],function(require, exports, module) {
    var TouchTracker = require('./TouchTracker');
    var EventHandler = require('famous/core/EventHandler');

    module.exports = famous.inputs.TouchSync = TouchSync;
});

define('famous/math/Vector',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.math.Vector = Vector;
});

define('famous/math/Matrix',['require','exports','module','./Vector'],function(require, exports, module) {
    var Vector = require('./Vector');

    module.exports = famous.math.Matrix = Matrix;
});

define('famous/math/Quaternion',['require','exports','module','./Matrix'],function(require, exports, module) {
    var Matrix = require('./Matrix');

    module.exports = famous.math.Quaternion = Quaternion;
});

define('famous/math/Random',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.math.Random = Random;
});

define('famous/math/Utilities',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.math.Utilities = Utilities;
});

define('famous/modifiers/Draggable',['require','exports','module','famous/core/Transform','famous/transitions/Transitionable','famous/core/EventHandler','famous/math/Utilities','famous/inputs/GenericSync','famous/inputs/MouseSync','famous/inputs/TouchSync'],function(require, exports, module) {
    var Transform = require('famous/core/Transform');
    var Transitionable = require('famous/transitions/Transitionable');
    var EventHandler = require('famous/core/EventHandler');
    var Utilities = require('famous/math/Utilities');

    var GenericSync = require('famous/inputs/GenericSync');
    var MouseSync = require('famous/inputs/MouseSync');
    var TouchSync = require('famous/inputs/TouchSync');

    module.exports = famous.modifiers.Draggable = Draggable;
});

define('famous/modifiers/Fader',['require','exports','module','famous/transitions/Transitionable','famous/core/OptionsManager'],function(require, exports, module) {
    var Transitionable = require('famous/transitions/Transitionable');
    var OptionsManager = require('famous/core/OptionsManager');

    module.exports = famous.modifiers.Fader = Fader;
});

define('famous/modifiers/ModifierChain',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.modifiers.ModifierChain = ModifierChain;
});

define('famous/modifiers/StateModifier',['require','exports','module','famous/core/Modifier','famous/core/Transform','famous/transitions/Transitionable','famous/transitions/TransitionableTransform'],function(require, exports, module) {
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Transitionable = require('famous/transitions/Transitionable');
    var TransitionableTransform = require('famous/transitions/TransitionableTransform');

    module.exports = famous.modifiers.StateModifier = StateModifier;
});

define('famous/physics/integrators/SymplecticEuler',['require','exports','module','famous/core/OptionsManager'],function(require, exports, module) {
    var OptionsManager = require('famous/core/OptionsManager');

    module.exports = famous.physics.integrators.SymplecticEuler = SymplecticEuler;
});

define('famous/physics/bodies/Particle',['require','exports','module','famous/math/Vector','famous/core/Transform','famous/core/EventHandler','../integrators/SymplecticEuler'],function(require, exports, module) {
    var Vector = require('famous/math/Vector');
    var Transform = require('famous/core/Transform');
    var EventHandler = require('famous/core/EventHandler');
    var Integrator = require('../integrators/SymplecticEuler');

    module.exports = famous.physics.bodies.Particle = Particle;
});

define('famous/physics/bodies/Body',['require','exports','module','./Particle','famous/core/Transform','famous/math/Vector','famous/math/Quaternion','famous/math/Matrix'],function(require, exports, module) {
    var Particle = require('./Particle');
    var Transform = require('famous/core/Transform');
    var Vector = require('famous/math/Vector');
    var Quaternion = require('famous/math/Quaternion');
    var Matrix = require('famous/math/Matrix');

    module.exports = famous.physics.bodies.Body = Body;
});

define('famous/physics/bodies/Circle',['require','exports','module','./Body','famous/math/Matrix'],function(require, exports, module) {
    var Body = require('./Body');
    var Matrix = require('famous/math/Matrix');

    module.exports = famous.physics.bodies.Circle = Circle;
});

define('famous/physics/bodies/Rectangle',['require','exports','module','./Body','famous/math/Matrix'],function(require, exports, module) {
    var Body = require('./Body');
    var Matrix = require('famous/math/Matrix');

    module.exports = famous.physics.bodies.Rectangle = Rectangle;
});

define('famous/physics/constraints/Constraint',['require','exports','module','famous/core/EventHandler'],function(require, exports, module) {
    var EventHandler = require('famous/core/EventHandler');

    module.exports = famous.physics.constraints.Constraint = Constraint;
});

define('famous/physics/constraints/Collision',['require','exports','module','./Constraint','famous/math/Vector'],function(require, exports, module) {
    var Constraint = require('./Constraint');
    var Vector = require('famous/math/Vector');

    module.exports = famous.physics.constraints.Collision = Collision;
});

define('famous/physics/constraints/Curve',['require','exports','module','./Constraint','famous/math/Vector'],function(require, exports, module) {
    var Constraint = require('./Constraint');
    var Vector = require('famous/math/Vector');

    module.exports = famous.physics.constraints.Curve = Curve;
});

define('famous/physics/constraints/Distance',['require','exports','module','./Constraint','famous/math/Vector'],function(require, exports, module) {
    var Constraint = require('./Constraint');
    var Vector = require('famous/math/Vector');

    module.exports = famous.physics.constraints.Distance = Distance;
});

define('famous/physics/constraints/Snap',['require','exports','module','./Constraint','famous/math/Vector'],function(require, exports, module) {
    var Constraint = require('./Constraint');
    var Vector = require('famous/math/Vector');

    module.exports = famous.physics.constraints.Snap = Snap;
});

define('famous/physics/constraints/Surface',['require','exports','module','./Constraint','famous/math/Vector'],function(require, exports, module) {
    var Constraint = require('./Constraint');
    var Vector = require('famous/math/Vector');

    module.exports = famous.physics.constraints.Surface = Surface;
});

define('famous/physics/constraints/Wall',['require','exports','module','./Constraint','famous/math/Vector'],function(require, exports, module) {
    var Constraint = require('./Constraint');
    var Vector = require('famous/math/Vector');

    module.exports = famous.physics.constraints.Wall = Wall;
});

define('famous/physics/constraints/Walls',['require','exports','module','./Constraint','./Wall','famous/math/Vector'],function(require, exports, module) {
    var Constraint = require('./Constraint');
    var Wall = require('./Wall');
    var Vector = require('famous/math/Vector');

    module.exports = famous.physics.constraints.Walls = Walls;
});

define('famous/physics/forces/Force',['require','exports','module','famous/math/Vector','famous/core/EventHandler'],function(require, exports, module) {
    var Vector = require('famous/math/Vector');
    var EventHandler = require('famous/core/EventHandler');

    module.exports = famous.physics.forces.Force = Force;
});

define('famous/physics/forces/Drag',['require','exports','module','./Force'],function(require, exports, module) {
    var Force = require('./Force');

    module.exports = famous.physics.forces.Drag = Drag;
});

define('famous/physics/forces/Repulsion',['require','exports','module','./Force','famous/math/Vector'],function(require, exports, module) {
    var Force = require('./Force');
    var Vector = require('famous/math/Vector');

    module.exports = famous.physics.forces.Repulsion = Repulsion;
});

define('famous/physics/forces/RotationalDrag',['require','exports','module','./Drag'],function(require, exports, module) {
    var Drag = require('./Drag');

    module.exports = famous.physics.forces.RotationalDrag = RotationalDrag;
});

define('famous/physics/forces/Spring',['require','exports','module','./Force','famous/math/Vector'],function(require, exports, module) {
    var Force = require('./Force');
    var Vector = require('famous/math/Vector');

    module.exports = famous.physics.forces.Spring = Spring;
});

define('famous/physics/forces/RotationalSpring',['require','exports','module','./Spring'],function(require, exports, module) {
    var Spring = require('./Spring');

    module.exports = famous.physics.forces.RotationalSpring = RotationalSpring;
});

define('famous/physics/forces/VectorField',['require','exports','module','./Force','famous/math/Vector'],function(require, exports, module) {
    var Force = require('./Force');
    var Vector = require('famous/math/Vector');

    module.exports = famous.physics.forces.VectorField = VectorField;
});

define('famous/physics/PhysicsEngine',['require','exports','module','famous/core/EventHandler'],function(require, exports, module) {
    var EventHandler = require('famous/core/EventHandler');

    module.exports = famous.physics.PhysicsEngine = PhysicsEngine;
});

define('famous/surfaces/CanvasSurface',['require','exports','module','famous/core/Surface'],function(require, exports, module) {
    var Surface = require('famous/core/Surface');

    module.exports = famous.surfaces.CanvasSurface = CanvasSurface;
});

define('famous/surfaces/ContainerSurface',['require','exports','module','famous/core/Surface','famous/core/Context'],function(require, exports, module) {
    var Surface = require('famous/core/Surface');
    var Context = require('famous/core/Context');

    module.exports = famous.surfaces.ContainerSurface = ContainerSurface;
});

define('famous/surfaces/FormContainerSurface',['require','exports','module','./ContainerSurface'],function(require, exports, module) {
    var ContainerSurface = require('./ContainerSurface');

    module.exports = famous.surfaces.FormContainerSurface = FormContainerSurface;
});

define('famous/surfaces/ImageSurface',['require','exports','module','famous/core/Surface'],function(require, exports, module) {
    var Surface = require('famous/core/Surface');

    module.exports = famous.surfaces.ImageSurface = ImageSurface;
});

define('famous/surfaces/InputSurface',['require','exports','module','famous/core/Surface'],function(require, exports, module) {
    var Surface = require('famous/core/Surface');

    module.exports = famous.surfaces.InputSurface = InputSurface;
});

define('famous/surfaces/SubmitInputSurface',['require','exports','module','./InputSurface'],function(require, exports, module) {
    var InputSurface = require('./InputSurface');

    module.exports = famous.surfaces.SubmitInputSurface = SubmitInputSurface;
});

define('famous/surfaces/TextareaSurface',['require','exports','module','famous/core/Surface'],function(require, exports, module) {
    var Surface = require('famous/core/Surface');

    module.exports = famous.surfaces.TextareaSurface = TextareaSurface;
});

define('famous/surfaces/VideoSurface',['require','exports','module','famous/core/Surface'],function(require, exports, module) {
    var Surface = require('famous/core/Surface');

    module.exports = famous.surfaces.VideoSurface = VideoSurface;
});

define('famous/transitions/CachedMap',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.transitions.CachedMap = CachedMap;
});

define('famous/transitions/Easing',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.transitions.Easing = Easing;
});

define('famous/transitions/SnapTransition',['require','exports','module','famous/physics/PhysicsEngine','famous/physics/bodies/Particle','famous/physics/constraints/Snap','famous/math/Vector'],function(require, exports, module) {
    var PE = require('famous/physics/PhysicsEngine');
    var Particle = require('famous/physics/bodies/Particle');
    var Spring = require('famous/physics/constraints/Snap');
    var Vector = require('famous/math/Vector');

    module.exports = famous.transitions.SnapTransition = SnapTransition;
});

define('famous/transitions/SpringTransition',['require','exports','module','famous/physics/PhysicsEngine','famous/physics/bodies/Particle','famous/physics/forces/Spring','famous/math/Vector'],function(require, exports, module) {
    var PE = require('famous/physics/PhysicsEngine');
    var Particle = require('famous/physics/bodies/Particle');
    var Spring = require('famous/physics/forces/Spring');
    var Vector = require('famous/math/Vector');

    module.exports = famous.transitions.SpringTransition = SpringTransition;
});

define('famous/transitions/WallTransition',['require','exports','module','famous/physics/PhysicsEngine','famous/physics/bodies/Particle','famous/physics/forces/Spring','famous/physics/constraints/Wall','famous/math/Vector'],function(require, exports, module) {
    var PE = require('famous/physics/PhysicsEngine');
    var Particle = require('famous/physics/bodies/Particle');
    var Spring = require('famous/physics/forces/Spring');
    var Wall = require('famous/physics/constraints/Wall');
    var Vector = require('famous/math/Vector');

    module.exports = famous.transitions.WallTransition = WallTransition;
});

define('famous/utilities/KeyCodes',['require','exports','module'],function(require, exports, module) {
    module.exports = famous.utilities.KeyCodes = KeyCodes;
});

define('famous/utilities/Timer',['require','exports','module','famous/core/Engine'],function(require, exports, module) {
    module.exports = famous.utilities.Timer = {
        setTimeout : setTimeout,
        setInterval : setInterval,
        debounce : debounce,
        after : after,
        every : every,
        clear : clear
    };
});

define('famous/views/SequentialLayout',['require','exports','module','famous/core/OptionsManager','famous/core/Transform','famous/core/ViewSequence','famous/utilities/Utility'],function(require, exports, module) {
    var OptionsManager = require('famous/core/OptionsManager');
    var Transform = require('famous/core/Transform');
    var ViewSequence = require('famous/core/ViewSequence');
    var Utility = require('famous/utilities/Utility');

    module.exports = famous.views.SequentialLayout = SequentialLayout;
});

define('famous/views/Deck',['require','exports','module','famous/core/Transform','famous/core/OptionsManager','famous/transitions/Transitionable','famous/utilities/Utility','./SequentialLayout'],function(require, exports, module) {
    var Transform = require('famous/core/Transform');
    var OptionsManager = require('famous/core/OptionsManager');
    var Transitionable = require('famous/transitions/Transitionable');
    var Utility = require('famous/utilities/Utility');
    var SequentialLayout = require('./SequentialLayout');

    module.exports = famous.views.Deck = Deck;
});

define('famous/views/RenderController',['require','exports','module','famous/core/Modifier','famous/core/RenderNode','famous/core/Transform','famous/transitions/Transitionable','famous/core/View'],function(require, exports, module) {
    var Modifier = require('famous/core/Modifier');
    var RenderNode = require('famous/core/RenderNode');
    var Transform = require('famous/core/Transform');
    var Transitionable = require('famous/transitions/Transitionable');
    var View = require('famous/core/View');

    module.exports = famous.views.RenderController = RenderController;
});

define('famous/views/EdgeSwapper',['require','exports','module','famous/transitions/CachedMap','famous/core/Entity','famous/core/EventHandler','famous/core/Transform','./RenderController'],function(require, exports, module) {
    var CachedMap = require('famous/transitions/CachedMap');
    var Entity = require('famous/core/Entity');
    var EventHandler = require('famous/core/EventHandler');
    var Transform = require('famous/core/Transform');
    var RenderController = require('./RenderController');

    module.exports = famous.views.EdgeSwapper = EdgeSwapper;
});

define('famous/views/FlexibleLayout',['require','exports','module','famous/core/Entity','famous/core/Transform','famous/core/OptionsManager','famous/core/EventHandler','famous/transitions/Transitionable'],function(require, exports, module) {
    var Entity = require('famous/core/Entity');
    var Transform = require('famous/core/Transform');
    var OptionsManager = require('famous/core/OptionsManager');
    var EventHandler = require('famous/core/EventHandler');
    var Transitionable = require('famous/transitions/Transitionable');

    module.exports = famous.views.FlexibleLayout = FlexibleLayout;
});

define('famous/views/Flipper',['require','exports','module','famous/core/Transform','famous/transitions/Transitionable','famous/core/RenderNode','famous/core/OptionsManager'],function(require, exports, module) {
    var Transform = require('famous/core/Transform');
    var Transitionable = require('famous/transitions/Transitionable');
    var RenderNode = require('famous/core/RenderNode');
    var OptionsManager = require('famous/core/OptionsManager');

    module.exports = famous.views.Flipper = Flipper;
});

define('famous/views/GridLayout',['require','exports','module','famous/core/Entity','famous/core/RenderNode','famous/core/Transform','famous/core/ViewSequence','famous/core/EventHandler','famous/core/Modifier','famous/core/OptionsManager','famous/transitions/Transitionable','famous/transitions/TransitionableTransform'],function(require, exports, module) {
    var Entity = require('famous/core/Entity');
    var RenderNode = require('famous/core/RenderNode');
    var Transform = require('famous/core/Transform');
    var ViewSequence = require('famous/core/ViewSequence');
    var EventHandler = require('famous/core/EventHandler');
    var Modifier = require('famous/core/Modifier');
    var OptionsManager = require('famous/core/OptionsManager');
    var Transitionable = require('famous/transitions/Transitionable');
    var TransitionableTransform = require('famous/transitions/TransitionableTransform');

    module.exports = famous.views.GridLayout = GridLayout;
});

define('famous/views/HeaderFooterLayout',['require','exports','module','famous/core/Entity','famous/core/RenderNode','famous/core/Transform','famous/core/OptionsManager'],function(require, exports, module) {
    var Entity = require('famous/core/Entity');
    var RenderNode = require('famous/core/RenderNode');
    var Transform = require('famous/core/Transform');
    var OptionsManager = require('famous/core/OptionsManager');

    module.exports = famous.views.HeaderFooterLayout = HeaderFooterLayout;
});

define('famous/views/Lightbox',['require','exports','module','famous/core/Transform','famous/core/Modifier','famous/core/RenderNode','famous/utilities/Utility','famous/core/OptionsManager','famous/transitions/Transitionable','famous/transitions/TransitionableTransform'],function(require, exports, module) {
    var Transform = require('famous/core/Transform');
    var Modifier = require('famous/core/Modifier');
    var RenderNode = require('famous/core/RenderNode');
    var Utility = require('famous/utilities/Utility');
    var OptionsManager = require('famous/core/OptionsManager');
    var Transitionable = require('famous/transitions/Transitionable');
    var TransitionableTransform = require('famous/transitions/TransitionableTransform');

    module.exports = famous.views.Lightbox = Lightbox;
});

define('famous/views/Scroller',['require','exports','module','famous/core/Entity','famous/core/Group','famous/core/OptionsManager','famous/core/Transform','famous/utilities/Utility','famous/core/ViewSequence','famous/core/EventHandler'],function(require, exports, module) {
    var Entity = require('famous/core/Entity');
    var Group = require('famous/core/Group');
    var OptionsManager = require('famous/core/OptionsManager');
    var Transform = require('famous/core/Transform');
    var Utility = require('famous/utilities/Utility');
    var ViewSequence = require('famous/core/ViewSequence');
    var EventHandler = require('famous/core/EventHandler');

    module.exports = famous.views.Scroller = Scroller;
});

define('famous/views/Scrollview',['require','exports','module','famous/physics/PhysicsEngine','famous/physics/bodies/Particle','famous/physics/forces/Drag','famous/physics/forces/Spring','famous/core/EventHandler','famous/core/OptionsManager','famous/core/ViewSequence','famous/views/Scroller','famous/utilities/Utility','famous/inputs/GenericSync','famous/inputs/ScrollSync','famous/inputs/TouchSync'],function(require, exports, module) {
    var PhysicsEngine = require('famous/physics/PhysicsEngine');
    var Particle = require('famous/physics/bodies/Particle');
    var Drag = require('famous/physics/forces/Drag');
    var Spring = require('famous/physics/forces/Spring');

    var EventHandler = require('famous/core/EventHandler');
    var OptionsManager = require('famous/core/OptionsManager');
    var ViewSequence = require('famous/core/ViewSequence');
    var Scroller = require('famous/views/Scroller');
    var Utility = require('famous/utilities/Utility');

    var GenericSync = require('famous/inputs/GenericSync');
    var ScrollSync = require('famous/inputs/ScrollSync');
    var TouchSync = require('famous/inputs/TouchSync');

    module.exports = famous.views.Scrollview = Scrollview;
});

define('famous/views/ScrollContainer',['require','exports','module','famous/surfaces/ContainerSurface','famous/core/EventHandler','./Scrollview','famous/utilities/Utility','famous/core/OptionsManager'],function(require, exports, module) {
    var ContainerSurface = require('famous/surfaces/ContainerSurface');
    var EventHandler = require('famous/core/EventHandler');
    var Scrollview = require('./Scrollview');
    var Utility = require('famous/utilities/Utility');
    var OptionsManager = require('famous/core/OptionsManager');

    module.exports = famous.views.ScrollContainer = ScrollContainer;
});

define('famous/widgets/NavigationBar',['require','exports','module','famous/core/Scene','famous/core/Surface','famous/core/Transform','famous/core/View'],function(require, exports, module) {
    var Scene = require('famous/core/Scene');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var View = require('famous/core/View');

    module.exports = famous.widgets.NavigationBar = NavigationBar;
});

define('famous/widgets/Slider',['require','exports','module','famous/core/Surface','famous/surfaces/CanvasSurface','famous/core/Transform','famous/core/EventHandler','famous/math/Utilities','famous/core/OptionsManager','famous/inputs/MouseSync','famous/inputs/TouchSync','famous/inputs/GenericSync'],function(require, exports, module) {
    var Surface = require('famous/core/Surface');
    var CanvasSurface = require('famous/surfaces/CanvasSurface');
    var Transform = require('famous/core/Transform');
    var EventHandler = require('famous/core/EventHandler');
    var Utilities = require('famous/math/Utilities');
    var OptionsManager = require('famous/core/OptionsManager');

    var MouseSync = require('famous/inputs/MouseSync');
    var TouchSync = require('famous/inputs/TouchSync');
    var GenericSync = require('famous/inputs/GenericSync');

    module.exports = famous.widgets.Slider = Slider;
});

define('famous/widgets/ToggleButton',['require','exports','module','famous/core/Surface','famous/core/EventHandler','famous/views/RenderController'],function(require, exports, module) {
    var Surface = require('famous/core/Surface');
    var EventHandler = require('famous/core/EventHandler');
    var RenderController = require('famous/views/RenderController');

    module.exports = famous.widgets.ToggleButton = ToggleButton;
});

define('famous/widgets/TabBar',['require','exports','module','famous/utilities/Utility','famous/core/View','famous/views/GridLayout','./ToggleButton'],function(require, exports, module) {
    var Utility = require('famous/utilities/Utility');
    var View = require('famous/core/View');
    var GridLayout = require('famous/views/GridLayout');
    var ToggleButton = require('./ToggleButton');

    module.exports = famous.widgets.TabBar = TabBar;
});

